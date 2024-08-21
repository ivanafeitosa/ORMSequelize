const { livro } = require('../models');

const listarLivros = async (req, res) => {
    const dados = await livro.findAll();
    res.status(200).json({message: dados});
};

const listarLivrosPorId = async (req, res) => {
    const id = req.params.id;
    const dados = await livro.findByPk(id);

    if(!dados) {
        return res.status(404).json({
            erro: `Livro não encontrado`
        })
    }

    res.status(200).json({message: dados})
};

const criarLivros = async (req, res) => {
    const { titulo, autor, imagem } = req.body;
    const dados = await livro.create({
        titulo,
        autor,
        imagem
    });
    res.status(201).json({message: `Livro cadastrado com sucesso`});
};

const atualizarLivros = async (req, res) => {
    const id = req.params.id;
    const { titulo, autor, imagem } = req.body;

    const dados = await livro.findByPk(id);
    if(!dados) {
        return res.status(404).json({
            erro: `Livro não encontrado`
        })
    }

    await dados.update({
        titulo,
        autor,
        imagem
    })

    res.status(200).json({
        message: `Livro alterado com sucesso`
    })
};

const deleteLivros = async (req, res) => {
    const id = req.params.id;
    const dados = await livro.findByPk(id);
    if(!dados) {
        return res.status(404).json({
            erro: `Livro não encontrado`
        })
    }

    await dados.destroy();

    res.status(204).json({
        message: `Livro excluído com sucesso`
    });
};




module.exports = {
    listarLivros,
    listarLivrosPorId,
    criarLivros,
    atualizarLivros,
    deleteLivros
}