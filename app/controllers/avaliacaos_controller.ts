import type { HttpContext } from '@adonisjs/core/http'
import Avaliacao from '../models/avaliacoes.js'

export default class AvaliacoesController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perpage = request.input('perpage', 10)
        return await Avaliacao.query().paginate(page, perpage)
    }

    async show({ params }: HttpContext) {
        return await Avaliacao.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['jogo_id', 'classificacao', 'comentario'])
        return await Avaliacao.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const avaliacao = await Avaliacao.findOrFail(params.id)
        const dados = request.only(['jogo_id', 'classificacao', 'comentario'])
        avaliacao.merge(dados)
        return await avaliacao.save()
    }

    async destroy({ params }: HttpContext) {
        const avaliacao = await Avaliacao.findOrFail(params.id)
        await avaliacao.delete()
        return { msg: 'Registro deletado com sucesso', avaliacao }
    }
}