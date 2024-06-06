import type { HttpContext } from '@adonisjs/core/http'
import ItemPedido from '../models/itens_pedidos.js'

export default class ItensPedidosController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perpage = request.input('perpage', 10)
        return await ItemPedido.query().paginate(page, perpage)
    }

    async show({ params }: HttpContext) {
        return await ItemPedido.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['pedido_id', 'jogo_id', 'quantidade'])
        return await ItemPedido.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const itemPedido = await ItemPedido.findOrFail(params.id)
        const dados = request.only(['pedido_id', 'jogo_id', 'quantidade'])
        itemPedido.merge(dados)
        return await itemPedido.save()
    }

    async destroy({ params }: HttpContext) {
        const itemPedido = await ItemPedido.findOrFail(params.id)
        await itemPedido.delete()
        return { msg: 'Registro deletado com sucesso', itemPedido }
    }
}