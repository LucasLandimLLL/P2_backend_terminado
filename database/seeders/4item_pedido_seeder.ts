import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ItemPedido from '../../app/models/itens_pedidos.js'

export default class ItemPedidoSeeder extends BaseSeeder {
  async run() {
    await ItemPedido.createMany([
      { pedido_id: 1, jogo_id: 2, quantidade: 2 },
      { pedido_id: 5, jogo_id: 4, quantidade: 1 },
      { pedido_id: 6, jogo_id: 6, quantidade: 3 },
      { pedido_id: 9, jogo_id: 9, quantidade: 1 },
      { pedido_id: 7, jogo_id: 8, quantidade: 2 },
      { pedido_id: 8, jogo_id: 7, quantidade: 3 },
      { pedido_id: 5, jogo_id: 6, quantidade: 2 },
      { pedido_id: 3, jogo_id: 3, quantidade: 2 },
      { pedido_id: 2, jogo_id: 4, quantidade: 1 },
      { pedido_id: 4, jogo_id: 10, quantidade: 4 }
    ])
  }
}