# Next + Nest Articles App

For your comfort, the app is deployed to my personal VPS, you can access it here: http://161.97.130.21:3000

Backend: http://161.97.130.21:4000
Swagger: http://161.97.130.21:4000/docs

## Prerequisites

- Node 20.11.1
- Yarn 1.x

## Getting Started

Install deps for all workspaces:

```bash
yarn install
```

Run both apps in dev:

```bash
yarn dev
```

- Frontend: http://localhost:3000
- Backend: http://localhost:4000
- Swagger: http://localhost:4000/docs

Build all:

```bash
yarn build
```

Start both in prod (expects backend built and envs set):

```bash
yarn start
```

## Environment

- Frontend expects `NEXT_PUBLIC_API_BASE_URL` (default http://localhost:4000)
- Backend listens on `PORT` (default 4000)

## Structure

- `frontend/` Next.js app
- `backend/` Nest.js app
