import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Avaliacoes extends BaseSchema {
  protected tableName = 'avaliacoes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('jogo_id').unsigned().references('id').inTable('jogos').onDelete('CASCADE')
      table.integer('classificacao').notNullable()
      table.text('comentario').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}