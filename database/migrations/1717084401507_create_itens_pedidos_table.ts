import { BaseSchema } from '@adonisjs/lucid/schema'

export default class ItensPedidos extends BaseSchema {
  protected tableName = 'itens_pedidos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('pedido_id').unsigned().references('id').inTable('pedidos').onDelete('CASCADE')
      table.integer('jogo_id').unsigned().references('id').inTable('jogos').onDelete('CASCADE')
      table.integer('quantidade').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}