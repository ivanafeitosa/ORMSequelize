const { usuario } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const listarDados = async (req, res) => {
    const dados = await usuario.findAll();
    res.status(200).json({message: dados});
};

const listarDadosPorId = async (req, res) => {
    const id = req.params.id;
    const dados = await usuario.findByPk(id);

    if(!dados) {
        return res.status(404).json({
            erro: `Usuário não encontrado`
        })
    }

    res.status(200).json({message: dados})
};

const criarDados = async (req, res) => {
    const { nome, email, role, senha } = req.body;
    const senhaHash = await bcrypt.hash(senha, 8);
    const dados = await usuario.create({
        nome,
        email,
        role,
        senha: senhaHash
    });
    res.status(201).json({message: `Usuário cadastrado com sucesso`});
};

const atualizarDados = async (req, res) => {
    const id = req.params.id;
    const { nome, email, role } = req.body;
    
    const dados = await usuario.findByPk(id);
    if(!dados) {
        return res.status(404).json({
            erro: `Usuário não encontrado`
        })
    }

    await dados.update({
        nome,
        email,
        role
    })

    res.status(200).json({
        message: `Usuário alterado com sucesso`
    })
};

const deleteDados = async (req, res) => {
    const id = req.params.id;
    const dados = await usuario.findByPk(id);
    if(!dados) {
        return res.status(404).json({
            erro: `Usuário não encontrado`
        })
    }

    await dados.destroy();

    res.status(204).json({
        message: `Dado excluído com sucesso`
    });


}


module.exports = {
    listarDados,
    listarDadosPorId,
    criarDados,
    atualizarDados,
    deleteDados
}