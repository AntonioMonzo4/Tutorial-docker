FROM node:22-alpine 

WORKDIR /apps

COPY app.js .

CMD ["node", "app.js"]

