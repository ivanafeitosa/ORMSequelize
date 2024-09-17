process.env.NODE_ENV = 'development'
require('dotenv').config({path:'.env.test'})


const request = require('supertest');
const app = require('../server');
const { livro } = require('../models');

describe("Teste de rota de buscar livros", () => {
    it("Deve retornar todos os livros", async () => {
        const livros = [
            {
                id: 1,
                titulo: "Livro 1",
                autor: "Autor 1",
                imagem: "imagem1.jpg"
            },
            {
                id: 2,
                titulo: "Livro 2",
                autor: "Autor 2",
                imagem: "imagem2.jpg"
            },
        ];

        // Simulação da busca dos usuários no banco
        livro.findAll = () => Promise.resolve(livros);

        // Simulação de requisição realizada
        const response = await request(app).get('/livro');

        // Verifica se a resposta teve sucesso e a mensagem com os dados listados
        expect(response.status).toBe(200);
        expect(response.body.message).toEqual(livros);
    });
});

