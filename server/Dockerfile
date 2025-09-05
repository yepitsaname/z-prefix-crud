FROM node:alpine
RUN mkdir -p src/server
WORKDIR /src/server
COPY . .
COPY package*.json ./
RUN npm install
EXPOSE 5050
CMD ["npm","start"]