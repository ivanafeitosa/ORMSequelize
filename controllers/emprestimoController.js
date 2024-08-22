const { emprestimo, usuario, livro } = require("../models");

const criarEmprestimo = async (req, res) => {
    const { usuario_id, livro_id, dataEmprestimo, dataDevolucao } = req.body;

    const livroEmprestado = await emprestimo.findOne({where: {livro_id, dataDevolucao: null}})
    if(livroEmprestado){
        return res.status(400).json({message: `Livro já está emprestado`})
    };

    const novoEmprestimo = await emprestimo.create({
        usuario_id,
        livro_id,
        dataEmprestimo,
        dataDevolucao
    });
    res.status(201).json({message: `Empréstimo realizado com sucesso`});
};

const listarEmprestimos = async (req, res) => {
    const dados = await emprestimo.findAll({
        include: [
            {model: usuario, attributes: ['nome', 'email']},
            {model: livro, attributes: ['titulo', 'autor']}
        ]
    });
    res.status(200).json(dados);
};

const listarEmprestimoPorId = async (req, res) => {
    const id = req.params.id;
    const dados = await emprestimo.findByPk(id);

    if(!dados) {
        return res.status(404).json({
            erro: `Empréstimo não existe`
        })
    }

    res.status(200).json({message: dados})
};

const devolverEmprestimo = async (req, res) => {
    const id = req.params.id;
    const dados = await emprestimo.findByPk(id);

    if(!dados) {
        return res.status(404).json({
            erro: `Empréstimo não existe`
        })
    }

    dados.dataDevolucao = new Date();
    await dados.save();

    res.status(200).json({message: `Devolução realizada com sucesso`, dados})
};

const excluirEmprestimo = async (req, res) => {
    const id = req.params.id;
    const dados = await emprestimo.findByPk(id);
    if(!dados) {
        return res.status(404).json({
            erro: `Empréstimo não existe`
        })
    }

    await dados.destroy();

    res.status(204).end();
}

module.exports = {
    criarEmprestimo,
    listarEmprestimos,
    listarEmprestimoPorId,
    devolverEmprestimo,
    excluirEmprestimo
}