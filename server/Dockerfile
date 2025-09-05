FROM node:alpine
RUN mkdir -p src/server
WORKDIR /src/server
COPY . /src/server
RUN npm install
EXPOSE 5050
CMD ["npm","start"]