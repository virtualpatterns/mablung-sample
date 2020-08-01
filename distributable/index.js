import { createRequire as _createRequire } from "module";import '@virtualpatterns/mablung-source-map-support/install';
import { FileSystem } from '@virtualpatterns/mablung-file-system';
import Path from 'path';
import { Process } from '@virtualpatterns/mablung-process';
import { WorkerClient } from '@virtualpatterns/mablung-worker';

import { Configuration } from './library/configuration.js';
import { Log } from './library/log.js';

const Require = _createRequire(import.meta.url);

async function main() {

  try {

    let pidPath = './process/pid/index.pid';
    await FileSystem.ensureDir(Path.dirname(pidPath));

    Process.createPidFile(pidPath, { 'handleExit': false, 'handleKillSignal': false });

    let worker = new WorkerClient(Require.resolve('./library/worker/index.js'));

    try {

      await worker.module.useConfiguration(Configuration.root);

      Log.debug({ 'configuration': Configuration.root }, 'configuration is ...');
      Log.debug({ 'ping': await worker.ping() }, 'worker ping is ...');
      Log.debug(`worker.module.getIt() returned ${await worker.module.getIt()}`);

    } finally {
      await worker.exit();
    }

  } catch (error) {
    Log.error(error);
  }

}

main();
//# sourceMappingURL=index.js.map