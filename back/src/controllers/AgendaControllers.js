//const { state } = require('../db');
const { count } = require('../services/AgendaService');
const AgendaService = require('../services/AgendaService');

module.exports = {
  pesquisar: async (req, res) => {
    console.log(req.query.limit)
    console.log(req.query.offset)
    let contatos = await AgendaService.pesquisar(req.query.limit, req.query.offset)
    let count = await AgendaService.count()
    let listaRetorno = { contatos, count }

    res.json(listaRetorno);
  },

  buscarUm: async (req, res) => {
    let json = { error: '', result: {} };

    let nome = req.params.nome;
    let agenda = await AgendaService.buscarUm(nome);

    if (agenda) {
      json.result = agenda;
    }

    res.json(json)
  },

  inserir: async (req, res) => {
    let json = { error: '', result: {} };
    console.log(req.body)
    let telefone = req.body.telefone;
    let email = req.body.email;
    let nome = req.body.nome;

    if (telefone && email && nome) {
      await AgendaService.inserir(telefone, email, nome);
      json.result = {
        nome,
        telefone,
        email
      };
    } else {
      json.error = 'Campos não enviados';
    }
    res.json(json);
  },

  alterar: async (req, res) => {
    let json = { error: '', result: {} };

    let telefoneIdentificador = req.params.telefoneIdentificador;
    console.log(telefoneIdentificador)
    let telefone = req.body.telefone;
    let nome = req.body.nome;
    let email = req.body.email;

    if (nome && email && telefone && telefoneIdentificador) {
      await AgendaService.alterar(nome, telefone, email, telefoneIdentificador);
      json.result = {
        nome,
        telefone,
        email
      };
    } else {
      json.error = 'Campos não enviados';
    }
    res.json(json);
  },
  excluir: async (req, res) => {
    let json = { error: '', result: {} };

    await AgendaService.excluir(req.params.telefone);

    res.json(json);

  }
}


