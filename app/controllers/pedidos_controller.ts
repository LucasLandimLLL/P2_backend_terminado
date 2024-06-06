import type { HttpContext } from '@adonisjs/core/http'
import Pedido from '../models/pedidos.js'

export default class PedidosController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perpage = request.input('perpage', 10)
        return await Pedido.query().paginate(page, perpage)
    }

    async show({ params }: HttpContext) {
        return await Pedido.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['usuario_id', 'preco_total'])
        return await Pedido.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const pedido = await Pedido.findOrFail(params.id)
        const dados = request.only(['usuario_id', 'preco_total'])
        pedido.merge(dados)
        return await pedido.save()
    }

    async destroy({ params }: HttpContext) {
        const pedido = await Pedido.findOrFail(params.id)
        await pedido.delete()
        return { msg: 'Registro deletado com sucesso', pedido }
    }
}