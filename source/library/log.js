import { FormattedLog } from '@virtualpatterns/mablung-log'
import { Process } from '@virtualpatterns/mablung-process'

import { Configuration } from './configuration.js'
import Package from '../../package.json'

let log = null

if (Configuration.get('log.path') === 'console') {
  log = new FormattedLog({ 'level': Configuration.get('log.level') })
} else {
  log = new FormattedLog(Configuration.get('log.path'), { 'level': Configuration.get('log.level') })
}

log.info('-'.repeat(80))
log.info(`${Package.name} v${Package.version}`)
log.debug(`Process.version         = '${Process.version}'`)
log.debug(`Package.version         = 'v${Package.version}'`)
log.debug(`Configuration.log.level = '${Configuration.get('log.level')}'`)
log.debug(`Configuration.log.path  = '${Configuration.get('log.path')}'`)
log.info('-'.repeat(80))

export { log as Log }