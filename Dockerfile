# syntax = docker/dockerfile:1

FROM oven/bun:slim AS base

ARG PORT=3000

WORKDIR /src

# Build
FROM base AS build

COPY --link package.json bun.lockb .
RUN bun install

COPY --link . .

RUN bun run build

# Run
FROM base

ENV PORT=$PORT
ENV NODE_ENV=production

COPY --from=build /src/.output /src/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules

CMD [ "node", ".output/server/index.mjs" ]
