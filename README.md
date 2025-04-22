# Back-End Projetos

## Introdução

Este projeto de Back-End foi desenvolvido para gerenciar dados de forma eficiente, utilizando o Prisma como ORM e SQLite como banco de dados no ambiente de desenvolvimento. Ele fornece uma API RESTful com métodos para criar, ler, atualizar e deletar registros.

## Passo a Passo da Configuração

### 1. Instalando o Prisma

Primeiro, instale os pacotes necessários e inicialize o Prisma:

npm install prisma @prisma/client
npx prisma init

### 2. Configurando o arquivo .env

DATABASE_URL=

## Descrição dos Endpoints e Exemplos de Uso

### 1. **GET /api/items**

**Descrição:** Retorna todos os registros do banco de dados.

**Exemplo de Requisição:**
```
GET /api/items

Exemplo de Resposta:

[
  {
    "id": 1,
    "nome": "Item 1",
    "comentário": "Descrição do item 1",
    "perfil": "url da foto de perfil"
  },
  {
    "id": 2,
    "nome": "Item 2",
    "comentário": "Descrição do item 2",
     "perfil": "url da foto de perfil"
  }
]

2. GET /api/avaliacao/:id
Descrição: Retorna um registro específico com base no ID fornecido.

Exemplo de Requisição:

GET /api/avaliacao/1

Exemplo de Resposta:

{
  "id": 1,
  "nome": "Item 1",
  "comentário": "Descrição do item 1",
   "perfil": "url da foto de perfil"
}

3. POST /api/avaliacao
Descrição: Cria um novo registro no banco de dados.

Exemplo de Requisição:

POST /api/avaliacao
Content-Type: application/json

{
  "nome": "Novo Item",
  "comentario": "Descrição do novo item",
  "perfil": "url da foto de perfil"
}

Exemplo de Resposta:

{
  "id": 3,
  "nome": "Novo Item",
  "comentario": "Descrição do novo item",
  "perfil": "url da foto de perfil"
}

4. DELETE /api/avaliacao/:id
Descrição: Deleta um registro específico com base no ID fornecido.

Exemplo de Requisição:

DELETE /api/avaliacao/1

Exemplo de Resposta:

{
  "message": "Avaliação deletada com sucesso"
}





