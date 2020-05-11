import { FormattedLog } from '@virtualpatterns/mablung-log';

import { Configuration } from './configuration.js';

let log = null;

if (Configuration.get('log.path') === 'console') {
  log = new FormattedLog({ 'level': Configuration.get('log.level') });
} else {
  log = new FormattedLog(Configuration.get('log.path'), { 'level': Configuration.get('log.level') });
}

export { log as Log };
//# sourceMappingURL=log.js.map