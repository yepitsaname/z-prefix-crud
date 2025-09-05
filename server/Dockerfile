FROM node:alpine
RUN mkdir -p src/server
WORKDIR /src/server
COPY . .
RUN npm install
RUN npm install knex
EXPOSE 5050
CMD ["npm","start"]