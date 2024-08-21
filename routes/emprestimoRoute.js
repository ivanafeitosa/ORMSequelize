const express = require('express');
const router = express.Router();
const emprestimoController = require('../controllers/emprestimoController');
const authMiddleware = require('../middlewares/authMiddleware');


router.get('/', authMiddleware, emprestimoController.listarEmprestimos);
router.get('/:id', authMiddleware, emprestimoController.listarEmprestimoPorId);
router.post('/', authMiddleware, emprestimoController.criarEmprestimo);
router.put('/:id', authMiddleware, emprestimoController.devolverEmprestimo);
router.delete('/:id', authMiddleware, emprestimoController.excluirEmprestimo);


module.exports = router;