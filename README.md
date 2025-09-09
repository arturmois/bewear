# 🛍️ Bewear - E-commerce de Moda

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://bewear-sigma.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?style=for-the-badge&logo=postgresql)](https://postgresql.org/)

Bewear é uma plataforma de e-commerce moderna e responsiva para moda, construída com as mais recentes tecnologias web. O projeto oferece uma experiência completa de compra online com autenticação, carrinho de compras, checkout integrado com Stripe e gerenciamento de pedidos.

## 🚀 Demo

**Acesse a aplicação em produção:** [bewear-sigma.vercel.app](https://bewear-sigma.vercel.app)

## ✨ Funcionalidades

### 🛒 E-commerce Completo

- **Catálogo de Produtos**: Visualização de produtos organizados por categorias
- **Variantes de Produtos**: Diferentes cores e opções para cada produto
- **Carrinho de Compras**: Adicionar, remover e gerenciar itens
- **Checkout Seguro**: Integração com Stripe para pagamentos
- **Histórico de Pedidos**: Acompanhamento de compras realizadas

### 🔐 Autenticação

- **Login/Registro**: Sistema completo de autenticação
- **Login Social**: Integração com Google OAuth
- **Gerenciamento de Perfil**: Dados pessoais e endereços de entrega

### 📱 Interface Moderna

- **Design Responsivo**: Otimizado para desktop e mobile
- **UI/UX Intuitiva**: Interface limpa e fácil de usar
- **Tema Escuro/Claro**: Suporte a diferentes preferências visuais
- **Componentes Reutilizáveis**: Biblioteca de componentes consistente

## 🛠️ Tecnologias Utilizadas

### Frontend

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca de interface de usuário
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de estilização
- **shadcn/ui** - Biblioteca de componentes
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **React Query** - Gerenciamento de estado do servidor

### Backend

- **Next.js API Routes** - API endpoints
- **BetterAuth** - Sistema de autenticação
- **PostgreSQL** - Banco de dados relacional
- **Drizzle ORM** - Mapeamento objeto-relacional
- **Stripe** - Processamento de pagamentos

### Ferramentas de Desenvolvimento

- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **Drizzle Kit** - Migrações de banco de dados

## 📦 Instalação

### Pré-requisitos

- Node.js 18+
- PostgreSQL
- Conta no Stripe (para pagamentos)
- Conta no Google Cloud (para OAuth)

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/bewear.git
cd bewear
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo `.env.example` para `.env.local` e configure as variáveis:

```bash
cp env.example .env.local
```

Configure as seguintes variáveis no arquivo `.env.local`:

```env
# Banco de dados
DATABASE_URL=postgresql://usuario:senha@localhost:5432/bewear

# Autenticação
BETTER_AUTH_SECRET=sua_chave_secreta_aqui

# Google OAuth
GOOGLE_CLIENT_ID=seu_google_client_id
GOOGLE_CLIENT_SECRET=seu_google_client_secret

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

### 4. Configure o banco de dados

```bash
# Execute as migrações
npm run db:migrate

# (Opcional) Popule o banco com dados de exemplo
npm run db:seed
```

### 5. Execute o projeto

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🗄️ Estrutura do Banco de Dados

O projeto utiliza um schema bem estruturado com as seguintes tabelas principais:

- **users** - Dados dos usuários
- **categories** - Categorias de produtos
- **products** - Produtos do catálogo
- **product_variants** - Variantes dos produtos (cores, tamanhos)
- **carts** - Carrinhos de compra
- **cart_items** - Itens no carrinho
- **shipping_addresses** - Endereços de entrega
- **orders** - Pedidos realizados
- **order_items** - Itens dos pedidos

## 📁 Estrutura do Projeto

```
src/
├── actions/           # Server Actions
├── app/              # Páginas da aplicação (App Router)
│   ├── authentication/
│   ├── cart/
│   ├── checkout/
│   ├── my-orders/
│   └── ...
├── components/       # Componentes reutilizáveis
│   ├── common/       # Componentes comuns
│   └── ui/          # Componentes da UI (shadcn/ui)
├── db/              # Configuração do banco de dados
│   ├── schema.ts    # Schema do Drizzle
│   └── index.ts     # Conexão com o banco
├── hooks/           # Hooks customizados (React Query)
├── lib/             # Utilitários e configurações
└── providers/       # Providers do React
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ por [Seu Nome]

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
