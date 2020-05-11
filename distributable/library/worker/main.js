import { Configuration } from './configuration.js';

export function onImport(option = {}) {
  Configuration.merge(option);
}

export function getIt() {
  return Configuration.get('it');
}
//# sourceMappingURL=main.js.map