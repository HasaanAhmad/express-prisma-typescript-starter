# Effective BE Starter Template

A modern, clean, and fully type-safe Node.js backend starter template designed for rapid development with best practices. Built with Express, TypeScript, Prisma ORM, PostgreSQL, and Zod, it features a modular architecture with controllers, services, and modern routing. This template is production-ready, highly maintainable, and easy to extend.

---

## ✨ Features

- **TypeScript-first**: End-to-end type safety, including request validation and database access.
- **Prisma ORM**: Modern, type-safe database access, fully compatible with PostgreSQL.
- **Express 5**: Fast, minimalist, and robust HTTP server.
- **Zod Validation**: Schema-based request validation for runtime and compile-time safety.
- **Modular Architecture**: Clear separation of concerns with controllers, services, and routes.
- **Modern Routing**: Centralized, scalable route management.
- **Environment Configuration**: Simple, secure, and type-safe environment variable management.
- **Ready for Production**: Sensible defaults, logging, and error handling.

---

## 🏗️ Project Structure

```
be/
├── prisma/                # Prisma schema and migrations
│   └── schema.prisma
├── src/
│   ├── app.ts             # Express app setup
│   ├── server.ts          # Server entry point
│   ├── config/            # Environment and DB config
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Express middlewares
│   ├── routes/            # Modular route definitions
│   ├── services/          # Business logic/services
│   └── validators/        # Zod schemas for validation
├── .env.example           # Example environment variables
├── package.json           # Project metadata and scripts
└── tsconfig.json          # TypeScript configuration
```

---

## 🛠️ Tech Stack

- **Node.js** (TypeScript)
- **Express 5**
- **Prisma ORM** (with PostgreSQL)
- **Zod** (validation)
- **dotenv** (environment variables)
- **pnpm** (package manager)
- **ts-node-dev** (development)
- **tsup** (build tool)

---

## 🧩 Architecture Overview

- **Controllers**: Handle HTTP requests and responses, delegating business logic to services.
- **Services**: Encapsulate business logic and interact with the database via Prisma.
- **Routes**: Define API endpoints and wire controllers, supporting modular and scalable routing.
- **Middleware**: For cross-cutting concerns (e.g., authentication, logging).
- **Validation**: Zod schemas ensure type-safe, validated input for all endpoints.
- **Configuration**: Centralized, type-safe environment variable management.

---

## 🔒 Type Safety & Validation

- **TypeScript**: Ensures type safety across the codebase.
- **Zod**: Validates request payloads and infers types for use in services/controllers.
- **Prisma**: Generates fully-typed database client based on your schema.

---

## 🗄️ Database & Prisma

- **Prisma** is configured for PostgreSQL by default.
- Schema is defined in `prisma/schema.prisma`.
- Prisma Client is generated in `src/generated/prisma`.
- Database connection is managed in `src/config/db.ts`.

---

## 🚀 Getting Started

### 1. **Clone the Repository**

```bash
git clone <https://github.com/HasaanAhmad/express-prisma-typescript-starter>
cd be
```

### 2. **Install Dependencies**

```bash
pnpm install
```

### 3. **Configure Environment Variables**

- Copy `.env.example` to `.env` and fill in your values:
  - `PORT` (default: 3000)
  - `DATABASE_URL` (your PostgreSQL connection string)

### 4. **Set Up the Database**

```bash
pnpm exec prisma migrate dev --name init
```

### 5. **Generate Prisma Client**

```bash
pnpm exec prisma generate
```

### 6. **Run the Development Server**

```bash
pnpm dev
```

Server will be running at [http://localhost:3000](http://localhost:3000) (or your specified port).

---

## 📦 Available Scripts

- `pnpm dev` — Start the server in development mode with hot reload
- `pnpm build` — Build the project for production
- `pnpm start` — Start the built server

---

## 🧪 Example API Endpoints

- `GET /api/user` — List all users
- `POST /api/user` — Create a new user
- `GET /api/anything` — Example route
- `GET /health` — Health check

---

## 📝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

---

## 📄 License

This project is licensed under the ISC License.
