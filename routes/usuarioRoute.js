const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.listarDados);
router.get('/:id', usuarioController.listarDadosPorId);
router.post('/cadastro', usuarioController.criarDados);
router.put('/:id', usuarioController.atualizarDados);
router.delete('/:id', usuarioController.deleteDados);
router.post('/login', usuarioController.loginUsuario);


module.exports = router;