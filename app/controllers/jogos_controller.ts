import type { HttpContext } from '@adonisjs/core/http'
import Jogo from '../models/Jogo.js'

export default class JogosController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perpage = request.input('perpage', 10)
        return await Jogo.query().paginate(page, perpage)
    }

    async show({ params }: HttpContext) {
        return await Jogo.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['titulo', 'descricao', 'preco'])
        return await Jogo.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const jogo = await Jogo.findOrFail(params.id)
        const dados = request.only(['titulo', 'descricao', 'preco'])
        jogo.merge(dados)
        return await jogo.save()
    }

    async destroy({ params }: HttpContext) {
        const jogo = await Jogo.findOrFail(params.id)
        await jogo.delete()
        return { msg: 'Registro deletado com sucesso', jogo }
    }
}