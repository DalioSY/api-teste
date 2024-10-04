# Teste-API

## Índice

- [Visão Geral](#visão-geral)
  - [Imagens](#Imagens)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Começando](#começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Executando o Projeto](#executando-o-projeto)
  - [Exemplos de Query e Mutation](#exemplos-de-query-e-mutation)
- [Deploy](#deploy)
- [Contribuindo](#contribuindo)
- [Contato](#contato)

## Visão Geral

[descrição]

## Imagens

Aqui estão algumas imagens do projeto:

<div>
    <img src="./img/git-1.png" alt="Imagem 1" width="250"/>
    <img src="./img/git-2.png" alt="Imagem 2" width="250"/>
    <img src="./img/git-3.png" alt="Imagem 3" width="250"/>
    <img src="./img/git-4.png" alt="Imagem 4" width="250"/>
</div>

## Funcionalidades

- [lista]

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/pt)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [MySQL](https://www.mysql.com/)
- [Prisma](https://www.prisma.io/)

## Começando

### Pré-requisitos

- npm
- Node.js
- Docker

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/DalioSY/api-teste
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd api-teste
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Instalar o MySQL no Docker:

Execute o seguinte comando para iniciar uma instância do MySQL:

```bash
docker run --name my-mysql -e MYSQL_ROOT_PASSWORD=rootpassword -e MYSQL_DATABASE=mydb -p 3306:3306 -d mysql:latest
```

Se estiver tudo correto, você verá o contêiner my-mysql rodando.

5. Configure a variável de ambiente no arquivo `.env`:

   ```bash
   DATABASE_URL="mysql://root:rootpassword@localhost:3306/mydb"
   ```

### Executando o Projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

### Exemplos de Query e Mutation

1. Buscar todos os usuários:

   ```
   query {
      users {
        id
        name
        age
      }
   }
   ```

2. Criar um novo usuário:

   ```
   mutation {
      createUser(name: "Dalio", age: 39) {
        id
        name
        age
      }
   }
   ```

3. Atualizar um usuário:

   ```
   mutation {
      updateUser(id: 1, name: "Dalio", age: 40) {
        id
        name
        age
      }
   }
   ```

4. Deletar um usuário:

   ```
   mutation {
        deleteUser(id: 1)
      }
   ```

## Contribuindo

Contribuições são bem-vindas! Por favor, siga estas etapas para contribuir:

1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b feature/SuaFuncionalidade`).
3. Faça suas alterações.
4. Faça um commit das suas alterações (`git commit -m 'Adicionei uma nova funcionalidade'`).
5. Envie para a branch (`git push origin feature/SuaFuncionalidade`).
6. Crie um novo Pull Request.

## Contato

**Dalio Shindi Yamada**

- [GitHub](https://github.com/DalioSY)
- [LinkedIn](https://www.linkedin.com/in/dalio-s-yamada)
- [Portfólio](https://portfolio-dalio.vercel.app/)
