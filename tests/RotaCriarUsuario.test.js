process.env.NODE_ENV = 'development'
require('dotenv').config({path:'.env.test'})


const request = require('supertest');
const app = require('../server');
const { usuario } = require('../models');

describe("Teste de rota de criação de usuário", () => {
    it("Deve realizar a rota completa de criação de usuário - fluxo de requisição até a resposta", async () => {
        const novoUsuario = {
            nome: "Gabriela Mota",
            email: "gabriela.mota@gmail.com",
            role: "aluno",
            senha: "g4b1!$M0",
        };

        // Simulação da criação de usuário no banco
        usuario.create = () => Promise.resolve({ id: 1, ...novoUsuario });

        // Simulação de requisição realizada
        const response = await request(app).post('/usuario/cadastro').send(novoUsuario);

        //Verifica se a resposta teve sucesso e a mensagem enviada
        if(response.status === 201 && response.body.message === 'Usuário cadastrado com sucesso') {
            console.log('Teste de criação de usuário via rota: Passou');
        } else {
            console.log('Teste de criação de usuário via rota: Falhou');            
        }
    });
});