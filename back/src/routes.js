const express = require('express');
const router = express.Router();

const AgendaController = require('./controllers/AgendaControllers');

router.get('/agenda', AgendaController.pesquisar);
router.get('/agenda/:nome', AgendaController.pesquisar);
router.post('/agenda', AgendaController.inserir);
router.put('/agenda/:telefoneIdentificador', AgendaController.alterar);
router.delete('/agenda/:telefone', AgendaController.excluir);

module.exports = router;

