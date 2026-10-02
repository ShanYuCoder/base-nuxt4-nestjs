# Nuxt 4 + NestJS Base

Nuxt 4 frontend + Nest API in-repo — shadcn-vue, molecules/organisms, Storybook.

## Quick start

```bash
pnpm install
pnpm dev
```

`devServer` listens on `0.0.0.0`. On WSL with slow file watching: `NUXT_WATCH_POLLING=1`.

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Nuxt dev server |
| `pnpm dev:api` | Nest API (`apps/api`) |
| `pnpm storybook` | UI catalog (port 6006) |
| `pnpm test:unit` | Vitest |
| `pnpm test:e2e` | Playwright |

## Repo layout

- **FE**: Nuxt 4, `components/ui` (shadcn), `components/molecules`, `components/organisms`
- **BE**: `apps/api/` — example `sample-item` module + shared CRUD helpers
- **Contracts**: `packages/models` (Zod)

API client (`$apiFetch`) uses `runtimeConfig.public.apiBase` (default `/api`).
