import { BaseSeeder } from '@adonisjs/lucid/seeders'

import Avaliacao from '../../app/models/avaliacoes.js'

export default class AvaliacaoSeeder extends BaseSeeder {
  async run() {
    await Avaliacao.createMany([
      { jogo_id: 1, classificacao: 4, comentario: 'Ótimo jogo, recomendo!' },
      { jogo_id: 3, classificacao: 3, comentario: 'Gostei, mas poderia ser melhor.' },
      { jogo_id: 6, classificacao: 5, comentario: 'Incrível experiência de jogo!' },
      { jogo_id: 9, classificacao: 4, comentario: 'Gráficos impressionantes.' },
      { jogo_id: 8, classificacao: 3, comentario: 'História envolvente, mas curta.' },
      { jogo_id: 5, classificacao: 5, comentario: 'Um dos melhores jogos que já joguei!' },
      { jogo_id: 2, classificacao: 4, comentario: 'Vale cada centavo.' },
      { jogo_id: 4, classificacao: 3, comentario: 'Esperava mais do enredo.' },
      { jogo_id: 7, classificacao: 5, comentario: 'Recomendadíssimo!' },
      { jogo_id: 10, classificacao: 4, comentario: 'Excelente jogabilidade.' }
    ])
  }
}