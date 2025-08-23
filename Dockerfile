FROM node:20-alpine

WORKDIR /app

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@9.12.3 --activate

# Install deps first (better layer cache)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source
COPY prisma ./prisma
COPY src ./src
COPY db ./db

# Generate Prisma client for this image
RUN pnpm exec prisma generate

ENV NODE_ENV=production
ENV PORT=3001
EXPOSE 3001

# Ensure the DB schema exists, then start the socket server
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["pnpm", "start"]
