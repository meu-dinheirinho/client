# Meu dinheirinho - client

Este projeto é uma aplicação web simples construída com React e Node.js, containerizada com Docker.
O arquivo Makefile foi criado para facilitar a execução do projeto.

## Começando

### Pré-requisitos

Certifique-se de ter o Docker e o Node.js instalados em seu sistema.

### Instalando

Clone o repositório e navegue até o diretório do projeto.

```
https://github.com/meu-dinheirinho/client.git
cd client
```

Instale as dependências do Node.js.

```
make install
```

### Executando

Inicie a aplicação com o Docker.

```
make run
```

Acesse a aplicação em seu navegador em `http://localhost:3000`.

### Parando

Pare a aplicação com o Docker.

```
make stop
```

### Reiniciando

Reinicie a aplicação com o Docker.

```
make restart
```

### Finalizando

Encerre todos os containers Docker em execução.

```
make kill
```

## Construído com

- React
- Node.js
- Docker
s
