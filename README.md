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

### Additional auth endpoint

```bash
GET /api/v1/auth/user-info/:id
```

### Programs

Program related endpoints:

```bash
GET /api/v1/programs/:userId
POST /api/v1/programs/:userId
PUT /api/v1/programs/:userId/:programId
```

### Docker

```bash
docker build --tag sskender/app:latest .
```
