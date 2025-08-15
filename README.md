# 📱 Projeto Next 2.0 - Agenda de Contatos

## 💻 Sobre o projeto

Este é a segunda versão (2.0) de uma aplicação full-stack para gerenciamento de agenda de contatos. Representa uma evolução dos projetos anteriores de agenda, com melhorias na interface e funcionalidades adicionais.

## 🎯 Funcionalidades

### Frontend
- ✅ **CRUD completo** - Criar, visualizar, editar e excluir contatos
- ✅ **Upload de imagens** - Sistema de upload de fotos para contatos
- ✅ **Paginação** - Navegação entre páginas de contatos
- ✅ **Loading spinner** - Indicador de carregamento
- ✅ **Interface responsiva** - Layout adaptável com Bootstrap 5
- ✅ **Favicon customizado** - Ícone de livro personalizado

### Backend
- ✅ **API REST** - Endpoints para gerenciamento de contatos
- ✅ **Banco MySQL** - Persistência de dados
- ✅ **CORS habilitado** - Comunicação frontend/backend
- ✅ **Variáveis de ambiente** - Configuração segura

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura das páginas
- **CSS3** - Estilização personalizada
- **JavaScript ES6+** - Lógica da aplicação e fetch API
- **Bootstrap 5** - Framework CSS responsivo

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MySQL** - Banco de dados relacional
- **Cors** - Middleware para CORS
- **Body-parser** - Parser de requisições
- **Dotenv** - Gerenciamento de variáveis de ambiente
- **Nodemon** - Auto-reload em desenvolvimento

## 📁 Estrutura do Projeto

```
projeto-next-2.0/
├── front/                      # Frontend da aplicação
│   ├── agenda.html            # Página principal
│   ├── agenda.css             # Estilos personalizados
│   ├── agenda.js              # Lógica JavaScript
│   ├── teste.html             # Página de testes
│   ├── user.png               # Avatar padrão
│   └── *.ico, *.jfif          # Assets e ícones
├── back/                       # Backend da aplicação
│   ├── src/
│   │   ├── controllers/        # Controladores da API
│   │   ├── services/          # Lógica de negócio
│   │   ├── db.js              # Configuração do banco
│   │   ├── routes.js          # Definição das rotas
│   │   └── server.js          # Servidor principal
│   ├── package.json           # Dependências do backend
│   └── variaveis.env          # Variáveis de ambiente
├── projeto/                   # Arquivos auxiliares
├── teste.js                   # Teste de API externa
└── README.md                  # Documentação
```

## 🚀 Como executar o projeto

### Pré-requisitos
- Node.js (versão 14 ou superior)
- MySQL Server
- Navegador web moderno

### Backend
1. Entre na pasta do backend:
   ```bash
   cd back
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `variaveis.env`:
   ```env
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=agenda_contatos
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

### Frontend
1. Entre na pasta do frontend:
   ```bash
   cd front
   ```

2. Inicie um servidor local:
   ```bash
   python3 -m http.server 8000
   # ou
   npx live-server
   ```

3. Acesse no navegador: `http://localhost:8000/agenda.html`

## 🔧 Funcionalidades Principais

### Upload de Imagens
- Sistema de upload de fotos para contatos
- Suporte a múltiplos arquivos
- Preview das imagens selecionadas

### Paginação
- Navegação entre páginas de contatos
- Botões "Anterior" e "Próximo"
- Indicador da página atual

### API Integration
- Comunicação com API externa (JSONPlaceholder para testes)
- Fetch API para requisições assíncronas
- Tratamento de erros e loading states

## 🧪 Arquivo de Teste

O projeto inclui um arquivo `teste.js` que demonstra:
```javascript
function b() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(r => r.json())
    .then(date => console.log(date))
}
```

## 📈 Evolução do Projeto

Este projeto representa a **versão 2.0** da série de agendas:

1. **"..."** - Versão inicial básica
2. **projeto-next-2.0** - Esta versão com melhorias ⭐
3. **AgendaDigital** - Versão final mais refinada

## 🎨 Melhorias da Versão 2.0

- ✨ Interface mais moderna e limpa
- 📸 Sistema de upload de imagens
- 📄 Paginação implementada
- 🎯 Melhor organização do código
- 🖼️ Assets visuais personalizados

## 👩‍💻 Autora

**Maria Eduarda**  
*Desenvolvedora Full Stack*

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

*Projeto desenvolvido como parte dos estudos em desenvolvimento web full-stack - Maio 2022*