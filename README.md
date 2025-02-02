# Next-Starsoft

## 📌 Descrição

Este projeto é uma aplicação web desenvolvida com Next.js para um marketplace de NFTs. Ele implementa funcionalidades de carrinho de compras, exibição de produtos e interações com usuários.

## 🚀 Tecnologias Utilizadas

- **Next.js 15.1.6** – Framework para aplicações React com SSR e otimizações avançadas.
- **TypeScript** – Tipagem ao código.
- **Redux Toolkit** – Gerenciamento de estado simplificado.
- **Styled Components** – Estilização baseada em componentes.
- **Framer Motion** – Animações fluidas e otimizadas.
- **React Toastify** – Exibição de notificações amigáveis ao usuário.
- **Jest + Testing Library** – Testes unitários e integração.
- **ESLint e Prettier** – Padronização e formatação do código.
- **Docker** – Contêinerização da aplicação.

## 📋 Funcionalidades Implementadas

- 📌 Exibição de NFTs disponíveis para compra.
- 🛒 Adição e remoção de itens no carrinho.
- 💰 Cálculo automático do total da compra.
- 🔄 Persistência do estado do carrinho com Redux.
- 🔔 Notificações interativas para ações do usuário.
- 🌟 Animações suaves para uma melhor experiência.
- 📲 Layout Responsivo.

## 📂 Configuração e Execução

### ✅ Pré-requisitos

Certifique-se de ter instalado:

- Node.js (versão 18+)
- Gerenciador de pacotes (Yarn ou npm)
- Docker Desktop

### 🔧 Instalação

# Instale as dependências

yarn install

# ou

npm install

````

### Configurar as Variáveis de Ambiente**
Crie um arquivo `.env.local` na raiz do projeto e defina as variáveis necessárias:
```
NEXT_API_URL=https://starsoft-challenge-7dfd4a56a575.herokuapp.com
```

### ▶️ Executando o projeto
```sh
# Inicie o Docker Desktop e execute o seguinte comando:
docker compose up -d

# Inicie o servidor de desenvolvimento
yarn dev
# ou
npm run dev
````

A aplicação estará disponível em `http://localhost:3001`.

### 🧪 Rodando testes

```sh
yarn test
# ou
npm test
```

## ⚠️ Possíveis Limitações e Melhorias Futuras

- 📌 Implementar autenticação de usuários.
- 📌 Melhoras com uma manutenção continua do projeto.
- 📌 Criei o arquivo tsconfig.test.json para rodar os testes, por conta da mudança automatica do jsx para preserved pelo next, acredito que existam outras formas de lidar com isso alem desta.

## 📝 Observações

- Nas novas versões do Next.js, os métodos como getStaticProps e getServerSideProps não são mais suportados em arquivos dentro da pasta app. Por isso, optei por usar fetch diretamente, garantindo mais flexibilidade e simplicidade no consumo da API, além de facilitar o gerenciamento de estado na aplicação.

---
