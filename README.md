# Node.js backend starter

Starter kit for developing backend with Node.js

## What is inside?

- cors
- express
- helmet
- mongoose
- mongoSanitize
- morgan
- xss
- eslint
- nodemon
- dotenv

### Run

```bash
npm start
```

### Run development

```bash
npm run dev
```

### Linter

```bash
npm run lint
```

```bash
npm run lint:fix
```

### Authentication

Two endpoints are available for user management:

```bash
POST /api/v1/auth/register
POST /api/v1/auth/login
```

### Docker

```bash
docker build --tag sskender/app:latest .
```
