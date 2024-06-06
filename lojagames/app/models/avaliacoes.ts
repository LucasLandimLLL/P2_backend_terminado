import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Jogo from './Jogo.js'

export default class Avaliacoes extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public classificacao: number

  @column()
  public comentario: string

  @column()
  public jogoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Jogo)
  public jogo: BelongsTo<typeof Jogo>
}