FROM node:alpine
RUN mkdir -p src/server
WORKDIR /src/server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5050
CMD ["npm","start"]