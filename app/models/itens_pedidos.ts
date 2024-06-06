import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Jogo from './Jogo.js'
import Pedido from './pedidos.js'

export default class itens_pedidos extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public pedidoId: number

  @column()
  public jogoId: number

  @column()
  public quantidade: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Pedido)
  public pedido: BelongsTo<typeof Pedido>

  @belongsTo(() => Jogo)
  public jogo: BelongsTo<typeof Jogo>
}