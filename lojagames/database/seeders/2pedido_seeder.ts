import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Pedido from '../../app/models/Pedidos.js'

export default class PedidoSeeder extends BaseSeeder {
  async run() {
    await Pedido.createMany([
      { usuario_id: 1, preco_total: 119.98 },
      { usuario_id: 9, preco_total: 99.98 },
      { usuario_id: 8, preco_total: 79.99 },
      { usuario_id: 6, preco_total: 129.97 },
      { usuario_id: 10, preco_total: 159.96 },
      { usuario_id: 2, preco_total: 69.99 },
      { usuario_id: 7, preco_total: 49.99 },
      { usuario_id: 5, preco_total: 89.98 },
      { usuario_id: 1, preco_total: 109.97 },
      { usuario_id: 3, preco_total: 139.96 }
    ])
  }
}