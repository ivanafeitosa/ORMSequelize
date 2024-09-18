process.env.NODE_ENV = 'development'
require('dotenv').config({path:'.env.test'})


const jwt = require('jsonwebtoken');
const request = require('supertest');
const app = require('../server');
const { emprestimo } = require('../models');

describe("Teste de rota de criação de emprestimos", () => {
    it("Deve realizar a rota completa de criação de emprestimo - fluxo de requisição até a resposta", async () => {
        const novoEmprestimo = {
            dataEmprestimo: new Date(),
            dataDevolucao: "2024-08-25",
            usuario_id: 1,
            livro_id: 1,            
        };

        // Simulação de criação de token para usar na rota que possui middleware
        const token = jwt.sign(
            {
                id: 1,
                nome: "UsuarioTeste"
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Simulação de que o livro não está emprestado
        emprestimo.findOne = () => Promise.resolve(null);

        // Simulação de criação de empréstimo no banco
        emprestimo.create = () => Promise.resolve(novoEmprestimo);

        // Simulação de requisição realizada
        const response = await request(app).post('/emprestimo').set('Authorization', `Bearer ${token}`).send(novoEmprestimo);

        //Verifica se a resposta teve sucesso e a mensagem enviada
        expect(response.status).toBe(201);
        expect(response.body.message).toBe("Empréstimo realizado com sucesso");
    });

    it("Não deve permitir realizar o empréstimo de um único livro ao mesmo tempo", async () => {
        const novoEmprestimo = {
            dataEmprestimo: new Date(),
            dataDevolucao: null,
            usuario_id: 1,
            livro_id: 1,            
        };

        // Simulação de criação de token para usar na rota que possui middleware
        const token = jwt.sign(
            {
                id: 1,
                nome: "UsuarioTeste"
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Simulação de que o livro está emprestado
        emprestimo.findOne = () => Promise.resolve(novoEmprestimo);

        // Simulação de requisição realizada
        const response = await request(app).post('/emprestimo').set('Authorization', `Bearer ${token}`).send(novoEmprestimo);

        //Verifica se a resposta teve sucesso e a mensagem enviada
        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Livro já está emprestado");
    }); 
});