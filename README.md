# Votação: Documentação para Rodar o Projeto Node AdonisJS

## Requisitos
Certifique-se de que os seguintes requisitos estejam atendidos antes de começar:

- Node.js (versão 14.21.3 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Passos para Rodar o Projeto

### 1. Clone o Repositório
Faça o clone do repositório do projeto para a sua máquina local:
```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Instale as Dependências
Navegue até o diretório do projeto e instale as dependências necessárias:
```bash
cd back
npm install
```

### 3. Rodar Migrations
```bash
node ace migration:run
```

### 4. Iniciar Servidor
```bash
npm run dev
```