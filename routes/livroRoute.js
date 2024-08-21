const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', livroController.listarLivros);
router.get('/:id', livroController.listarLivrosPorId);
router.post('/', authMiddleware, livroController.criarLivros);
router.put('/:id', authMiddleware, livroController.atualizarLivros);
router.delete('/:id', authMiddleware, livroController.deleteLivros);



module.exports = router;