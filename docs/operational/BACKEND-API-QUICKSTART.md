# Backend API — quick reference

NestJS API in `apps/api/` · TypeORM (MySQL) · CQRS · shared Zod via `@portal/models`.

## Local dev

### 1. Database

Use your MySQL instance (Docker or local). Defaults match `apps/api` env:

- Host: `127.0.0.1`
- Port: `3306`
- Database: `portal`

### 2. API env

```bash
cp apps/api/.env.example apps/api/.env
# adjust DB_* if needed
```

### 3. Run & verify

```bash
pnpm dev:api
pnpm --filter @portal/api test
```

- Health: `GET http://localhost:4000/api/health`
- Swagger: `http://localhost:4000/api/docs`
- Example CRUD: `GET|POST|PATCH|DELETE /api/sample-items`

## Common layer

| Concern | Location (`apps/api/src/common/`) |
|---------|-----------------------------------|
| API envelope | `http/api-response.*`, interceptor, exception filter |
| Read models | `crud/base-read.query.ts`, `criteria/base-criteria.ts` |
| Writes | `crud/base-write.handler.ts` |
| Validation | `http/zod-validation.pipe.ts` + `@portal/models` schemas |

Relation metadata for entities: `packages/models/src/{entity}/*.relationships.meta.ts`.
