FROM node:13.3.0-alpine3.10

RUN apk --update --no-cache add tzdata bash curl \
    && cp /usr/share/zoneinfo/Europe/Kiev /etc/localtime \
    && echo "Europe/Kiev" > /etc/timezone \
    && apk del tzdata

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./app/package*.json /usr/src/app/

RUN npm install --production --registry=https://registry.npmjs.org

COPY ./app /usr/src/app

# RUN npm run build
EXPOSE 3014
# CMD [ "node", "app.js" ]

COPY wait-for-it.sh /

# RUN npm run build

CMD [ "node", "app.js" ]