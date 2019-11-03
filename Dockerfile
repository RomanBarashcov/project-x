FROM node:10

ARG MODE

ENV modeValue=$MODE

WORKDIR /usr/src/app

COPY . .

RUN npm install

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

RUN chmod +x /wait

CMD npm run $modeValue