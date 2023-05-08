FROM node:16 
WORKDIR /cliapp

COPY package*.json .

RUN npm install
COPY . .
EXPOSE 8082
CMD [ "npm","run","start" ]