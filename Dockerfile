FROM node:12.13-alpine  as builder
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/app
RUN npm i -g  nodemon yarn @angular/cli @nrwl/cli
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build api
FROM node:latest as serve
COPY --from=builder /usr/app/node_modules node_modules
COPY --from=builder /usr/app/dist dist
CMD node dist/apps/api/main.js
