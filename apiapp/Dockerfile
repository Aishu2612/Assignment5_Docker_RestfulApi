FROM node:16
WORKDIR /usr/apis
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 8081
CMD [ "npm","start" ]