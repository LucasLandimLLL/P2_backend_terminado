import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Pedidos extends BaseSchema {
  protected tableName = 'pedidos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('usuario_id').unsigned().references('id').inTable('usuarios').onDelete('CASCADE')
      table.decimal('preco_total', 12, 2).notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}