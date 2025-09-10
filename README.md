# 🛍️ Bewear - E-commerce de Moda

[![Deploy](https://img.shields.io/badge/Deploy-AWS%20SST-black?style=for-the-badge&logo=amazon-aws)](https://d1ogaetjvc72dh.cloudfront.net/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?style=for-the-badge&logo=postgresql)](https://postgresql.org/)
[![BetterAuth](https://img.shields.io/badge/BetterAuth-Authentication-green?style=for-the-badge)](https://better-auth.com/)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-purple?style=for-the-badge&logo=stripe)](https://stripe.com/)

Bewear é uma plataforma de e-commerce moderna e responsiva para moda, construída com as mais recentes tecnologias web. O projeto oferece uma experiência completa de compra online com autenticação, carrinho de compras, checkout integrado com Stripe e gerenciamento de pedidos.

## 🚀 Demo

**Acesse a aplicação em produção:** [d208sz0c0l2ud8.cloudfront.net](https://d208sz0c0l2ud8.cloudfront.net/)

## ✨ Funcionalidades

### 🛒 E-commerce Completo

- **Catálogo de Produtos**: Visualização de produtos organizados por categorias com sistema de busca
- **Variantes de Produtos**: Diferentes cores e opções para cada produto
- **Carrinho de Compras**: Adicionar, remover e gerenciar itens com persistência
- **Processo de Checkout**: Fluxo completo de identificação e confirmação
- **Endereços de Entrega**: Gerenciamento múltiplo de endereços de entrega
- **Checkout Seguro**: Integração com Stripe para pagamentos
- **Histórico de Pedidos**: Acompanhamento de compras realizadas com detalhes completos
- **Status de Pedidos**: Sistema de status (pending, paid, canceled)

### 🔐 Autenticação

- **Login/Registro**: Sistema completo de autenticação com email e senha
- **Login Social**: Integração com Google OAuth
- **Gerenciamento de Perfil**: Dados pessoais e endereços de entrega
- **Sessões Seguras**: Gerenciamento de sessões com BetterAuth

### 📱 Interface Moderna

- **Design Responsivo**: Otimizado para desktop e mobile
- **UI/UX Intuitiva**: Interface limpa e fácil de usar com shadcn/ui
- **Componentes Reutilizáveis**: Biblioteca de componentes consistente
- **Banners Promocionais**: Sistema de banners responsivos
- **Navegação Intuitiva**: Menu de categorias e navegação otimizada

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

- **Next.js 15 API Routes** - API endpoints e Server Actions
- **BetterAuth** - Sistema de autenticação moderno
- **PostgreSQL** - Banco de dados relacional
- **Drizzle ORM** - Mapeamento objeto-relacional type-safe
- **Stripe** - Processamento de pagamentos seguro
- **Server Actions** - Ações do servidor para operações de dados

### Estado e Dados

- **React Query (TanStack Query)** - Gerenciamento de estado do servidor
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas e tipos
- **Custom Hooks** - Hooks personalizados para queries e mutations

### Deploy e Infraestrutura

- **SST (Serverless Stack)** - Framework para deploy na AWS
- **AWS** - Infraestrutura em nuvem
- **Docker** - Containerização da aplicação
- **CloudFront** - CDN para imagens

### Ferramentas de Desenvolvimento

- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **Drizzle Kit** - Migrações de banco de dados
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de estilização

## 📦 Instalação

### Pré-requisitos

- Node.js 18+
- PostgreSQL
- Conta no Stripe (para pagamentos)
- Conta no Google Cloud (para OAuth)
- Docker (opcional, para containerização)

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

Copie o arquivo `env.example` para `.env.local` e configure as variáveis:

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
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar em produção
npm run start
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### 6. Deploy com Docker (Opcional)

```bash
# Build da imagem Docker
docker build -t bewear .

# Executar container
docker run -p 3000:3000 bewear
```

## 🗄️ Estrutura do Banco de Dados

O projeto utiliza um schema bem estruturado com as seguintes tabelas principais:

### Tabelas de Autenticação

- **users** - Dados dos usuários (id, name, email, image)
- **sessions** - Sessões ativas dos usuários
- **accounts** - Contas vinculadas (Google OAuth)
- **verification** - Tokens de verificação de email

### Tabelas de E-commerce

- **categories** - Categorias de produtos
- **products** - Produtos do catálogo
- **product_variants** - Variantes dos produtos (cores, preços, imagens)
- **carts** - Carrinhos de compra dos usuários
- **cart_items** - Itens no carrinho
- **shipping_addresses** - Endereços de entrega dos usuários
- **orders** - Pedidos realizados
- **order_items** - Itens dos pedidos

### Relacionamentos

- Usuários podem ter múltiplos endereços de entrega
- Produtos têm múltiplas variantes (cores, preços)
- Carrinhos são únicos por usuário
- Pedidos mantêm snapshot dos dados no momento da compra

## 📁 Estrutura do Projeto

```
src/
├── actions/                    # Server Actions
│   ├── add-cart-product/      # Adicionar produto ao carrinho
│   ├── create-checkout-session/ # Criar sessão de checkout
│   ├── create-shipping-address/ # Criar endereço de entrega
│   ├── decrease-cart-product-quantity/ # Diminuir quantidade
│   ├── finish-order/          # Finalizar pedido
│   ├── get-cart/              # Buscar carrinho
│   ├── get-user-addresses/    # Buscar endereços do usuário
│   ├── remove-cart-product/   # Remover produto do carrinho
│   └── update-cart-shipping-address/ # Atualizar endereço
├── app/                       # Páginas da aplicação (App Router)
│   ├── authentication/        # Login e registro
│   ├── cart/                  # Carrinho e checkout
│   │   ├── identification/    # Identificação e endereços
│   │   └── confirmation/      # Confirmação do pedido
│   ├── checkout/              # Processo de pagamento
│   │   └── success/           # Página de sucesso
│   ├── my-orders/             # Histórico de pedidos
│   ├── category/              # Páginas de categorias
│   └── product-variant/       # Páginas de produtos
├── components/                # Componentes reutilizáveis
│   ├── common/                # Componentes comuns
│   │   ├── cart-item.tsx      # Item do carrinho
│   │   ├── cart.tsx           # Carrinho completo
│   │   ├── header.tsx         # Cabeçalho
│   │   ├── footer.tsx         # Rodapé
│   │   └── product-list.tsx   # Lista de produtos
│   └── ui/                    # Componentes da UI (shadcn/ui)
├── data/                      # Funções de busca de dados
│   ├── categories/            # Dados de categorias
│   └── products/              # Dados de produtos
├── db/                        # Configuração do banco de dados
│   ├── schema.ts              # Schema do Drizzle
│   └── index.ts               # Conexão com o banco
├── hooks/                     # Hooks customizados
│   ├── mutations/             # Hooks para mutations (React Query)
│   └── queries/               # Hooks para queries (React Query)
├── lib/                       # Utilitários e configurações
│   └── auth.ts                # Configuração do BetterAuth
└── providers/                 # Providers do React
    └── react-query.tsx        # Provider do React Query
```

## 🚀 Deploy

### SST (Serverless Stack) - Configurado

O projeto está configurado para deploy na AWS usando SST:

```bash
# Instalar SST globalmente
npm install -g sst

# Deploy para desenvolvimento
sst deploy

# Deploy para produção
sst deploy --stage production
```

### Configuração AWS

1. Configure as credenciais AWS
2. Execute `sst deploy` para criar a infraestrutura
3. Configure as variáveis de ambiente no console AWS
4. Acesse a URL fornecida pelo SST

### Outras plataformas

O projeto também pode ser deployado em:

- **Vercel** - Para deploy simples e rápido
- **Netlify** - Com configuração manual
- **Railway** - Com Docker
- **DigitalOcean App Platform** - Com Docker
- **AWS Amplify** - Alternativa ao SST

## 📋 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Inicia servidor de produção
npm run lint         # Executa linting do código
npm run type-check   # Verifica tipos TypeScript

# Banco de dados
npm run db:generate  # Gera migrações do Drizzle
npm run db:migrate   # Executa migrações
npm run db:push      # Sincroniza schema com o banco
```

## 🔧 Configurações Especiais

### CloudFront CDN

O projeto está configurado para usar CloudFront como CDN para imagens:

- Hostname: `d4lgxe9bm8juw.cloudfront.net`
- Configurado no `next.config.ts`

### Docker

O projeto inclui um `Dockerfile` otimizado para produção:

- Baseado em Node.js Alpine
- Multi-stage build
- Otimizado para Next.js standalone

### BetterAuth

Sistema de autenticação moderno com:

- Suporte a email/senha
- Google OAuth
- Sessões seguras
- Verificação de email

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças seguindo o padrão Conventional Commits:
   - `feat:` para novas funcionalidades
   - `fix:` para correções de bugs
   - `docs:` para documentação
   - `style:` para formatação
   - `refactor:` para refatoração
   - `test:` para testes
   - `chore:` para tarefas de manutenção
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Exemplo de Commits

```bash
git commit -m "feat: add user authentication with BetterAuth"
git commit -m "fix: resolve cart item quantity update issue"
git commit -m "docs: update README with installation instructions"
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ por [Seu Nome]

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
