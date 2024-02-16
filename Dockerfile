FROM node:alpine3.19
WORKDIR  /usr/var/app
COPY package*.json .
COPY . .
RUN npm install
EXPOSE 4000
CMD [ "node","server.js" ]
