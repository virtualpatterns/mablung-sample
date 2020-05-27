import { Configuration } from './configuration.js'

export function useConfiguration(root = {}) {
  Configuration.merge(root)
}

export function getIt() {
  return Configuration.get('it')
}
