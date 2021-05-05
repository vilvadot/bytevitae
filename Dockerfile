FROM node:13.8.0-alpine3.11 as base
ENV SOURCE_PATH /web

WORKDIR $SOURCE_PATH
COPY package.json package-lock.json  ./

RUN npm install
COPY . .

CMD ["npm", "run", "start"]