import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Usuario from './usuario.js'
import ItemPedido from './itens_pedidos.js'

export default class Pedidos extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public usuario_id: number

  @column()
  public preco_total: number

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  @belongsTo(() => Usuario)
  public usuario: BelongsTo<typeof Usuario>

  @hasMany(() => ItemPedido)
  public itensPedido: HasMany<typeof ItemPedido>
}
