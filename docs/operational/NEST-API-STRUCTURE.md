# Nest API structure — common layer

Shared HTTP/CQRS/CRUD helpers live under `apps/api/src/common/`.

| Concern | Nest (`apps/api/src/common/`) |
|---------|-------------------------------|
| Success/error envelope | `http/api-response.ts` + `ApiResponseInterceptor` + `ApiExceptionFilter` |
| Commands / queries | `crud/base-write.handler.ts`, `crud/base-read.query.ts` |
| List criteria | `criteria/base-criteria.ts` |
| API resource shape | `crud/base-resource.ts` |
| Select options | `crud/select-item.query.ts` |
| Request validation | `ZodValidationPipe` + `@portal/models` write schemas |
| Persistence | `persistence/typeorm-write.repository.ts` + `DatabaseModule` |

## CQRS wiring

```text
Controller (thin)
  → QueryBus.execute(GetXQuery)  → QueryHandler → BaseReadQuery
  → CommandBus.execute(CreateXCommand) → CommandHandler → BaseWriteHandler
```

## Contracts vs persistence

- **Contract** = Zod (`@portal/models`) — shared with the Nuxt app
- **Persistence** = TypeORM entities in `apps/api/src/modules/**` + `DatabaseModule` (MySQL)
- **Relation hints** = `*.relationships.meta.ts` in `packages/models`

Example module: `apps/api/src/modules/example/sample-item/`.
