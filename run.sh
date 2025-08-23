#!/bin/bash
set -e

# Default mode = dev
MODE=${1:-dev}


if [ "$MODE" = "dev" ] || [ "$MODE" = "development" ]; then
  echo "🚀 Starting container in DEVELOPMENT mode on port 3001"
  docker run --rm --env-file .env -p 3001:3001 zoryon/noxchess-server:dev
elif [ "$MODE" = "prod" ] || [ "$MODE" = "production" ]; then
  echo "🚀 Starting container in PRODUCTION mode on port 3001..."
  docker run -d --env-file .env -p 3001:3001 zoryon/noxchess-server:prod
else
  echo "❌ Unknown mode: $MODE"
  echo "Usage: $0 [dev|prod]"
  exit 1
fi