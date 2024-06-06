import router from '@adonisjs/core/services/router'
import UsuariosController from '../app/controllers/usuarios_controller.js'
import JogosController from '../app/controllers/jogos_controller.js'
import PedidosController from '../app/controllers/pedidos_controller.js'
import ItensPedidosController from '../app/controllers/item_pedidos_controller.js'
import AvaliacoesController from '../app/controllers/avaliacaos_controller.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/usuarios', UsuariosController).apiOnly()
router.resource('/jogos', JogosController).apiOnly()
router.resource('/pedidos', PedidosController).apiOnly()
router.resource('/itens_pedidos', ItensPedidosController).apiOnly()
router.resource('/avaliacoes', AvaliacoesController).apiOnly()
