FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat git

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
RUN corepack enable && \
    corepack prepare pnpm@latest --activate
COPY . .

FROM base AS final
WORKDIR /app
COPY --from=builder /app .
CMD ["node", "accounting.js"]
