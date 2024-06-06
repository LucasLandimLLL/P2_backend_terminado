import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Usuario from '../../app/models/usuario.js'

export default class UsuarioSeeder extends BaseSeeder {
  public async run () {
    await Usuario.createMany([
      { nome: 'João Silva', email: 'joao@example.com', senha: 'senha123' },
      { nome: 'Maria Souza', email: 'maria@example.com', senha: 'senha456' },
      { nome: 'Carlos Santos', email: 'carlos@example.com', senha: 'senha789' },
      { nome: 'Ana Oliveira', email: 'ana@example.com', senha: 'senha123' },
      { nome: 'Pedro Lima', email: 'pedro@example.com', senha: 'senha456' },
      { nome: 'Juliana Pereira', email: 'juliana@example.com', senha: 'senha789' },
      { nome: 'Lucas Santos', email: 'lucas@example.com', senha: 'senha123' },
      { nome: 'Fernanda Costa', email: 'fernanda@example.com', senha: 'senha456' },
      { nome: 'Mateus Oliveira', email: 'mateus@example.com', senha: 'senha789' },
      { nome: 'Isabela Lima', email: 'isabela@example.com', senha: 'senha123' }
    ])
  }
}