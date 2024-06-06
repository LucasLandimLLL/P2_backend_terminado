import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Jogo from '../../app/models/Jogo.js'

export default class JogoSeeder extends BaseSeeder {
  async run() {
    await Jogo.createMany([
      { titulo: 'The Witcher 3: Wild Hunt', descricao: 'Jogo de RPG de mundo aberto', preco: 59.99, quantidade_disponivel: 10 },
      { titulo: 'Red Dead Redemption 2', descricao: 'Jogo de ação e aventura no velho oeste', preco: 49.99, quantidade_disponivel: 8 },
      { titulo: 'Cyberpunk 2077', descricao: 'RPG futurista com mundo aberto', preco: 69.99, quantidade_disponivel: 5 },
      { titulo: 'Assassin\'s Creed Valhalla', descricao: 'Aventura épica na era dos vikings', preco: 54.99, quantidade_disponivel: 7 },
      { titulo: 'FIFA 22', descricao: 'Simulador de futebol realista', preco: 79.99, quantidade_disponivel: 6 },
      { titulo: 'Call of Duty: Warzone', descricao: 'Jogo de tiro em primeira pessoa', preco: 29.99, quantidade_disponivel: 12 },
      { titulo: 'Minecraft', descricao: 'Mundo aberto e construção', preco: 39.99, quantidade_disponivel: 15 },
      { titulo: 'Among Us', descricao: 'Jogo multiplayer de traição', preco: 9.99, quantidade_disponivel: 20 },
      { titulo: 'GTA V', descricao: 'Mundo aberto com missões e aventuras', preco: 49.99, quantidade_disponivel: 10 },
      { titulo: 'Valorant', descricao: 'Jogo de tiro tático em equipe', preco: 0, quantidade_disponivel: 25 }
    ])
  }
}