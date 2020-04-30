FROM node:12.16.1

WORKDIR /app
COPY example1.js .

CMD ["node", "/app/example1.js"]