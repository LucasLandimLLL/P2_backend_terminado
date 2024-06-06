import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Jogos extends BaseSchema {
  protected tableName = 'jogos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('titulo', 255).notNullable()
      table.text('descricao').notNullable()
      table.decimal('preco', 12, 2).notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}