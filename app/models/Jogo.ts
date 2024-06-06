import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Avaliacao from './avaliacoes.js'
import ItemPedido from './itens_pedidos.js'

export default class Jogos extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public titulo: string

  @column()
  public descricao: string

  @column()
  public preco: number

  @column()
  public quantidade_jogo: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Avaliacao)
  public avaliacoes: HasMany<typeof Avaliacao>

  @hasMany(() => ItemPedido)
  public itensPedido: HasMany<typeof ItemPedido>
}