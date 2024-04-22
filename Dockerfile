FROM node:20-alpine AS base

### Dependencies ###
FROM base AS deps
RUN apk add --no-cache libc6-compat git

# Install Packages
WORKDIR /

COPY package.json package-lock.json ./
RUN npm i

# Builder
FROM base AS builder

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

WORKDIR /


CMD ["node", "accounting.js"]