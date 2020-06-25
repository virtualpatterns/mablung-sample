import Path from 'path'
import { Migration as BaseMigration } from '@virtualpatterns/mablung-sqlite-migration'

const FilePath = __filePath
const FolderPath = Path.dirname(FilePath)

class Migration extends BaseMigration {

  constructor(path, database) {
    super(path, database)
  }

  static createMigration(name, path = Path.normalize(`${FolderPath}/../../source/library/migration`), templatePath = Path.normalize(`${FolderPath}/../../source/library/migration/template.js`)) {
    return super.createMigration(name, path, templatePath)
  }

  static async getMigration(...parameter) {
    return (await Promise.all([ super.getMigration(...parameter), super.getMigrationFromPath(`${FolderPath}/migration`, [ '*.js' ], [ 'template.js' ], ...parameter) ])).flat().sort()
  }

}

export { Migration }
