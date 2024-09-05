const bcrypt = require("bcryptjs");
const { criarDados } = require("../controllers/usuarioController");
const { usuario } = require("../models");

describe("Teste de criação de usuário", () => {
    it ("Deve criar um usuário e criptografar a senha", async () => {
        // Simulação de requisição
        const req = {
            body: {
                nome: "Marcelo Gomes",
                email: "marcelo.gomes@gmail.com",
                role: "aluno",
                senha: "Marcelo@123",
            }
        }

        // Simulação de resposta
        const res = {
            status: (code) => {
                res.statusCode = code;
                return res;
            },

            json: (data) => {
                res.data = data;
            },
        };

    });
})