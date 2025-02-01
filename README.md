# 🚀 **NoteSync API** - A Powerful Story Management API

![NoteSync Banner](https://via.placeholder.com/1200x400/020128/FFFFFF?text=NoteSync+API)

**NoteSync API** é uma API moderna e escalável para gerenciar histórias com autenticação, interações entre usuários e muito mais. Criada com **Express.js**, ela oferece uma experiência de usuário fluída e segura.

---

## 📖 **Sobre o Projeto**

A **NoteSync API** oferece funcionalidades completas para gerenciar histórias de maneira eficiente e segura. Com autenticação JWT, CRUD de histórias e segurança de ponta, esta API está pronta para uso em diversas aplicações.

---

## 🚀 **Funcionalidades**

- **CRUD de Histórias**: Permite criar, ler, atualizar e excluir histórias.
- **Autenticação JWT**: Sistema seguro de login e autenticação utilizando tokens JWT.
- **Interações de Usuários**: Gerencia interações entre usuários e suas histórias.
- **Segurança e Escalabilidade**: Escalável com foco na segurança de dados com criptografia e autenticação.

---

## 🛠️ **Tecnologias Usadas**

- **Node.js**: Ambiente de execução JavaScript para desenvolvimento no servidor.
- **Express.js**: Framework minimalista para criação de APIs RESTful.
- **JWT**: Sistema de autenticação com tokens JSON Web para garantir a segurança dos usuários.
- **MySQL**: Banco de dados relacional utilizado para armazenar histórias e interações, com estrutura SQL.
- **Bcryptjs**: Biblioteca para criptografar senhas de forma segura.
- **Sequelize**: ORM (Object Relational Mapping) para trabalhar com o MySQL de forma simplificada.
- **dotenv**: Utilizado para gerenciar variáveis de ambiente de forma segura e eficiente.
- **Morgan**: Middleware para registro de logs HTTP durante as requisições, ajudando na depuração.

---

## 🚀 **Como Rodar o Projeto Localmente**

### 🧑‍💻 **Passos para Instalação**

1. Clone este repositório:
    ```bash
    git clone https://github.com/SEU_USUARIO/notesync-api.git
    ```

2. Acesse o diretório do projeto:
    ```bash
    cd notesync-api
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

    ```env
    PORT=3000
    JWT_SECRET=seu-segredo
    MYSQL_HOST=localhost
    MYSQL_USER=root
    MYSQL_PASSWORD=sua_senha
    MYSQL_DATABASE=notesync
    ```

5. Inicie o servidor:
    ```bash
    npm start
    ```

6. Agora a API estará rodando em [http://localhost:3000](http://localhost:3000).

---

## 📝 **Endpoints da API**

- **POST /api/stories**: Cria uma nova história.
    - **Body**: `{ "title": "Título da História", "content": "Conteúdo da história" }`
    - **Resposta**: `{ "message": "História criada com sucesso!" }`
  
- **GET /api/stories**: Retorna todas as histórias.
    - **Resposta**: `[ { "id": 1, "title": "Título da História", "content": "Conteúdo da história" }, ... ]`
  
- **GET /api/stories/:id**: Retorna uma história específica.
    - **Resposta**: `{ "id": 1, "title": "Título da História", "content": "Conteúdo da história" }`
  
- **PUT /api/stories/:id**: Atualiza uma história existente.
    - **Body**: `{ "title": "Novo Título", "content": "Novo conteúdo" }`
    - **Resposta**: `{ "message": "História atualizada com sucesso!" }`
  
- **DELETE /api/stories/:id**: Exclui uma história específica.
    - **Resposta**: `{ "message": "História excluída com sucesso!" }`

- **POST /api/auth/register**: Registra um novo usuário.
    - **Body**: `{ "username": "usuario", "password": "senha" }`
    - **Resposta**: `{ "message": "Usuário registrado com sucesso!" }`
  
- **POST /api/auth/login**: Realiza o login de um usuário e retorna um token JWT.
    - **Body**: `{ "username": "usuario", "password": "senha" }`
    - **Resposta**: `{ "token": "seu_token_jwt" }`

---

## 🧑‍💻 **Contribuindo**

1. Faça o fork deste repositório.
2. Crie uma branch para sua nova feature (`git checkout -b feature/nova-feature`).
3. Faça suas alterações e commit (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um pull request.

---

## 📜 **Licença**

Este projeto está licenciado sob a [MIT License](LICENSE).