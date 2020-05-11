import { Configuration } from '@virtualpatterns/mablung-configuration';

import { Command } from './command.js';

let configuration = new Configuration({
  'it': Math.PI,
  'log': {
    'level': Command.logLevel, // 'trace',
    'path': Command.logPath // 'console'
  } });


export { configuration as Configuration };
//# sourceMappingURL=configuration.js.map