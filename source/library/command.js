import Command from 'commander'
import { FileSystem } from '@virtualpatterns/mablung-file-system'
import JSON5 from 'json5'
import { Process } from '@virtualpatterns/mablung-process'

const Require = __require
const Package = JSON5.parse(FileSystem.readFileSync(Require.resolve('../../package.json'), { 'encoding': 'utf-8' }))

Command.version(Package.version)
Command.option('--log-level <levelName>', 'Logging level, one of "trace", "debug", "info", "error", "warn", or "fatal"', 'trace')
Command.option('--log-path <path>', 'Path to the log file, or "console" to log to the console', 'console')

Command.parse(Process.argv)

export { Command }