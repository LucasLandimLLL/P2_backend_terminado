import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Jogo from '../../app/models/Jogo.js'

export default class JogoSeeder extends BaseSeeder {
  async run() {
    await Jogo.createMany([
      { titulo: 'The Witcher 3: Wild Hunt', descricao: 'Jogo de RPG de mundo aberto', preco: 59.99 },
      { titulo: 'Red Dead Redemption 2', descricao: 'Jogo de ação e aventura no velho oeste', preco: 49.99  },
      { titulo: 'Cyberpunk 2077', descricao: 'RPG futurista com mundo aberto', preco: 69.99, },
      { titulo: 'Assassin\'s Creed Valhalla', descricao: 'Aventura épica na era dos vikings', preco: 54.99 },
      { titulo: 'FIFA 22', descricao: 'Simulador de futebol realista', preco: 79.99  },
      { titulo: 'Call of Duty: Warzone', descricao: 'Jogo de tiro em primeira pessoa', preco: 39.99  },
      { titulo: 'Minecraft', descricao: 'Mundo aberto e construção', preco: 39.99  },
      { titulo: 'Among Us', descricao: 'Jogo multiplayer de traição', preco: 9.99  },
      { titulo: 'GTA V', descricao: 'Mundo aberto com missões e aventuras', preco: 49.99  },
      { titulo: 'Valorant', descricao: 'Jogo de tiro tático em equipe', preco: 0 }
    ])
  }
}