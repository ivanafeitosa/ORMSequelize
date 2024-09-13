process.env.NODE_ENV = 'development'
require('dotenv').config({path:'.env.test'})


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

        // Criptografia de senhas
        const senhaCriptografada = await bcrypt.hash(req.body.senha, 8);

        // Simulação de criação no banco de dados
        const usuarioCriado = {
            id: 1,
            nome: req.body.nome,
            email: req.body.email,
            role: req.body.role,
            senha: senhaCriptografada
        };
        
        usuario.create = () => Promise.resolve(usuarioCriado);


        // Execução da função ou método da controller
        await criarDados(req, res);

        // Verificar se a senha foi criptografada e o usuario criado
        if(res.statusCode === 201 && res.data.message === 'Usuário cadastrado com sucesso') {
            const senhaCorreta = await bcrypt.compare(req.body.senha, senhaCriptografada);
            if (senhaCorreta) {
                console.log('Teste de criação: Passou');
            } else {
                console.log('Teste de criação: Falhou - Senha criptografada não confere');
            }
        } else {
            console.log('Teste de criação: Falhou - Resposta incorreta')
        }
    });
})