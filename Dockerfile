# ------------------------------
# Base image
# ------------------------------
FROM node:24-alpine AS base
WORKDIR /app
ENV COREPACK_DEFAULT_TO_LATEST=0
RUN apk add --no-cache libc6-compat

# ------------------------------
# Dependencies
# ------------------------------
FROM base AS deps
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN set -eux; \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm install --frozen-lockfile; \
  else echo "No lockfile found" >&2; exit 1; \
  fi

# ------------------------------
# Builder (for prod only)
# ------------------------------
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Build: Prisma + TS checks
RUN set -eux; \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "No lockfile found for build" >&2; exit 1; \
  fi

# ------------------------------
# Production runtime
# ------------------------------
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app ./
EXPOSE 3000
USER node
CMD ["node", "src/index.ts"]

# ------------------------------
# Development runtime
# ------------------------------
FROM base AS dev
WORKDIR /app
ENV NODE_ENV=development
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN set -eux; \
  if [ -f yarn.lock ]; then yarn install; \
  elif [ -f package-lock.json ]; then npm install; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm install; \
  else echo "No lockfile found for dev install" >&2; exit 1; \
  fi
COPY . .
EXPOSE 3000
CMD [ "sh", "-c", "\
if [ -f pnpm-lock.yaml ]; then corepack enable pnpm && exec pnpm run dev; \
elif [ -f yarn.lock ]; then exec yarn dev; \
else exec npm run dev; \
fi \
"]