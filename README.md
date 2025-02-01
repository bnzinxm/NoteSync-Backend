# 🚀 **NoteSync API** - A Powerful Story Management API

![NoteSync Banner](https://via.placeholder.com/1200x400/020128/FFFFFF?text=NoteSync+API)

**NoteSync API** é uma API moderna e escalável para gerenciar histórias com autenticação, interações entre usuários e muito mais. Criada com **Express.js**, ela oferece uma experiência de usuário fluída e segura.

---

## 📖 **Sobre o Projeto**

**NoteSync API** oferece funcionalidades completas para gerenciar histórias de maneira eficiente e segura, com autenticação JWT e uma arquitetura pensada para escalabilidade. 

### 🚀 **Funcionalidades**
| Funcionalidade              | Descrição                                                                 |
|-----------------------------|---------------------------------------------------------------------------|
| **CRUD de Histórias**        | Permite criar, ler, atualizar e excluir histórias.                        |
| **Autenticação JWT**         | Sistema seguro de login e autenticação utilizando tokens JWT.             |
| **Interações de Usuários**   | Gerencia interações entre usuários e suas histórias.                      |
| **Segurança e Escalabilidade** | Escalável com foco na segurança de dados com criptografia e autenticação. |

### 🛠️ **Tecnologias Usadas**

| Tecnologia         | Descrição                                                                                                                                                             |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Node.js**        | Ambiente de execução JavaScript para desenvolvimento no servidor.                                                                                                   |
| **Express.js**     | Framework minimalista para criação de APIs RESTful.                                                                                                                   |
| **JWT**            | Sistema de autenticação com tokens JSON Web para garantir a segurança dos usuários.                                                                                  |
| **MySQL**        | Banco de dados SQL usado para armazenar histórias e interações.                                                                                                    |
| **Bcryptjs**       | Biblioteca para criptografar senhas de forma segura.                                                                                                                  
| **dotenv**         | Utilizado para gerenciar variáveis de ambiente de forma segura e eficiente.                                                                                   

---

## 🚀 **Como Rodar o Projeto Localmente**

### 🧑‍💻 **Passos para Instalação**

| Passo | Descrição                                                                                   |
|-------|---------------------------------------------------------------------------------------------|
| 1     | Clone este repositório com o comando:                                                       |
|       | ```bash                                                                                   |
|       | git clone https://github.com/SEU_USUARIO/notesync-api.git                                   |
| 2     | Navegue até o diretório do projeto:                                                         |
|       | ```bash                                                                                   |
|       | cd notesync-api                                                                            |
| 3     | Instale as dependências do projeto:                                                        |
|       | ```bash                                                                                   |
|       | npm install                                                                                |
| 4     | Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:                      |
|       | ```env                                                                                   |
|       | PORT=3000                                                                                 |
|       | JWT_SECRET=seu-segredo                                                                     |
|       | MONGO_URI=mongodb://localhost:27017/notesync                                                |
| 5     | Inicie o servidor:                                                                          |
|       | ```bash                                                                                   |
|       | npm start                                                                                 |
| 6     | Agora a API estará rodando em [http://localhost:3000](http://localhost:3000).               |

---

## 📝 **Endpoints da API**

Abaixo estão todos os endpoints disponíveis na API:

| Método | Endpoint                      | Descrição                              | Parâmetros                                   | Resposta Exemplo                             |
|--------|-------------------------------|----------------------------------------|----------------------------------------------|----------------------------------------------|
| `POST` | `/api/stories/create`          | Cria uma nova história.                | `{ title, content }`                         | `201 Created` - `História criada com sucesso!` |
| `GET`  | `/api/stories`                 | Retorna todas as histórias.            | -                                            | `200 OK` - Lista de histórias                |
| `GET`  | `/api/stories/:id`             | Retorna uma história específica.       | `id` - ID da história                        | `200 OK` - `História encontrada`             |
| `PUT`  | `/api/stories/:id`             | Atualiza uma história.                | `id` - ID da história<br>`{ title, content }` | `200 OK` - `História atualizada com sucesso!` |
| `DELETE`| `/api/stories/:id`             | Deleta uma história.                  | `id` - ID da história                        | `200 OK` - `História deletada com sucesso!`   |

---

## 🔒 **Autenticação e Segurança**

A API utiliza **JSON Web Tokens (JWT)** para autenticação. Você deve incluir o token JWT no cabeçalho da requisição para acessar as rotas protegidas.

### Exemplo de Requisição Autenticada:

```bash
curl -X GET http://localhost:3000/api/stories \
  -H "Authorization: Bearer <seu_token_jwt>"