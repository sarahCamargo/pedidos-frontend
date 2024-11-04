# PedidosFrontend

Backend: [Pedidos Backend](https://github.com/sarahCamargo/pedidos-backend)

# Funcionalidades

- **Módulo Produtos e Serviços**
  - Adicionar novos produtos ou serviços ao sistema.
  - Listar todos os produtos e serviços cadastrados.
  - Atualizar informações de produtos ou serviços existentes.
  - Remover produtos ou serviços do sistema.

- **Módulo Pedidos**
  - Criar novos pedidos, associando produtos e serviços.
  - Visualizar detalhes de pedidos existentes.
  - Atualizar o status dos pedidos.
  - Calcular o valor total dos pedidos com base nos itens selecionados.

## Tecnologias Utilizadas

- **Backend:** Spring Boot, JPA, Hibernate, PostgreSQL.
- **Frontend:** Angular

# Instruções para Configuração do Servidor Angular

## Pré-requisitos

1. **Node.js**: Baixar a versão mais recente do Node.js em [nodejs.org](https://nodejs.org/).

## Passo a Passo

### 1. Instalar o Node.js

- Acesse [nodejs.org](https://nodejs.org/) e baixe o instalador para o seu sistema operacional (Windows, macOS ou Linux).
- Siga as instruções do instalador para completar a instalação.

### 2. Clonar o Repositório

Use o Git para clonar o repositório do projeto para sua máquina. Se você não tiver o Git instalado, pode baixá-lo em [git-scm.com](https://git-scm.com/).

Execute o seguinte comando no terminal:

```bash
git clone https://github.com/sarahCamargo/pedidos-frontend
```

### 3. Instalar Dependências

No diretório do projeto, execute o comando a seguir para instalar todas as dependências necessárias:

```bash
npm install
```

### 4. Iniciar o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```bash
ng serve
```

Se você não tiver o Angular CLI instalado, pode instalá-lo globalmente com o comando:

```bash
npm install -g @angular/cli
```

### 5. Acessar a Aplicação

Após iniciar o servidor, abra um navegador e acesse a aplicação em:

```
http://localhost:4200
```
