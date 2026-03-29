FROM node:22-slim

WORKDIR /app

COPY package.json ./
RUN npm install

COPY tsconfig.json ./

CMD ["npx", "tsx", "watch", "sample.ts"]
