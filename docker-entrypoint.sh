#!/usr/bin/env sh
set -e

# Wait for DB to be reachable when running under docker-compose
if [ -n "$DATABASE_URL" ]; then
  echo "Waiting for database..."
  node -e "const u=new URL(process.env.DATABASE_URL);const h=u.hostname,p=Number(u.port||3306);const net=require('net');let t=0;function c(){t++;const s=net.createConnection({host:h,port:p},()=>{console.log('DB reachable');s.end();process.exit(0)});s.on('error',()=>{if(t>60){console.error('DB not reachable after 60 tries');process.exit(1)} setTimeout(c,1000)})} c();"
fi

# Generate Prisma client (mounted schema may differ at runtime)
pnpm exec prisma generate

# Start server
exec "$@"
