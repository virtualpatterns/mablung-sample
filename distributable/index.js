import { createRequire as _createRequire } from "module";import '@virtualpatterns/mablung-source-map-support/distributable/install.js';
import { WorkerClient } from '@virtualpatterns/mablung-worker';

import { Configuration } from './library/configuration.js';
import { Log } from './library/log.js';

const Require = _createRequire(import.meta.url);

async function main() {

  try {

    let worker = new WorkerClient();

    worker.writeTo('./process/log/main.log');

    try {

      await worker.import(Require.resolve('./library/worker/main.js'), Configuration.root);

      Log.debug({ 'ping': await worker.ping() }, 'worker load average is ...');
      Log.debug(`worker.module.getIt() returned ${await worker.module.getIt()}`);

    } finally {
      await worker.end();
    }

  } catch (error) {
    console.error(error);
  }

}

main();
//# sourceMappingURL=index.js.map