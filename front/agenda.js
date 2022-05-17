var contatos = null
var skip = 0
const limit = 6
var count = 0
listar()


function proximaPagina() {
  if (skip + limit <= count) {
    skip += limit;
    atualizarLista()
  }
}

function voltarPagina() {
  if (skip - limit >= 0) {
    skip -= limit;
    atualizarLista()
  }
}


async function listar() {

  var carregando = document.getElementById('carregar');
  carregando.style = ''
  retorno = JSON.parse(await request('GET', `http://localhost:3333/api/agenda?offset=${skip}&limit=${limit}`))
  carregando.style = 'display:none;'
  contatos = retorno.contatos
  count = retorno.count
  for (var i = 0; i < contatos.length; i++) {
    aparecer(contatos[i]);
  }
  var position = skip + limit > count ? count : skip + limit
  document.getElementById('listagem').innerHTML = `${skip + 1} - ${position} de ${count}`
}





function aparecer(pessoa) {
  var contatos = document.getElementById('contatos');
  contatos.innerHTML += '<div class="itemLista"><b>Nome</b>: ' + pessoa.nome + " " +
    "<br><b>telefone</b>:" + pessoa.telefone + "<br><b>E-mail</b>: " + pessoa.email + "</div>";
}

var adicionarContato = document.getElementById("adicionar-contato");
adicionarContato.onclick = async function () {
  var contato = {}
  contato.nome = prompt('adicione o nome')
  if (!contato.nome) return
  contato.email = prompt('adicione o email')
  contato.telefone = prompt('adicione número')
  await request('POST', 'http://localhost:3333/api/agenda', contato)
  atualizarLista();
}

function atualizarLista() {
  document.getElementById('contatos').innerHTML = ' ';

  listar();
}



var editarContato = document.getElementById("editar-contato");
editarContato.onclick = async function () {
  var telefone = prompt("Qual telefone deseja editar?")
  var contato = {}
  contato.nome = prompt('adicione o nome')
  if (!contato.nome) return
  contato.email = prompt('adicione o email')
  contato.telefone = prompt('adicione número')
  await request('PUT', `http://localhost:3333/api/agenda/${telefone}`, contato)
  atualizarLista();
}


var apagarContato = document.getElementById("apagar-contato");
apagarContato.onclick = async function () {
  var telefone = prompt("Qual telefone deseja apagar?");
  await request('DELETE', `http://localhost:3333/api/agenda/${telefone}`)
  atualizarLista();
}

async function request(metodo, endpoint, data) {
  return await new Promise((resolve) => {
    var xhr = new XMLHttpRequest()
    xhr.open(metodo, endpoint, true)
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        resolve(xhr.response)
      }
    };
    xhr.send(JSON.stringify(data ?? {}))
  })
}