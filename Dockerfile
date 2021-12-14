FROM node:14

RUN mkdir /zurnal

WORKDIR /zurnal

COPY ./package.json /zurnal

RUN yarn install

COPY . /zurnal

RUN yarn run build

ENV NODE_ENV production

EXPOSE 3000

CMD ["yarn", "start"]