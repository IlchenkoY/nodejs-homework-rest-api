FROM node:16.15.1

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "server"]