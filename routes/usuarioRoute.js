const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.listarDados);
router.get('/:id', usuarioController.listarDadosPorId);
router.post('/', usuarioController.criarDados);
router.put('/:id', usuarioController.atualizarDados);
router.delete('/:id', usuarioController.deleteDados);


module.exports = router;