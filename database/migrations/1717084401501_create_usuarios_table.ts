import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Usuarios extends BaseSchema {
  protected tableName = 'usuarios'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 255).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('senha', 255).notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}