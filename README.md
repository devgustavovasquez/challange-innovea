<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

This project was made with [Nest](https://github.com/nestjs/nest) .

## Running the app

```bash
# install dependencies
$ npm install

# configure environment variables and edit .env file with your token
$ cp .env.example .env

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Accessing the routes

By default the server will run on port 3000, but you can change it by adding a `PORT` in .env

Access route `/articles?q=` to do a search, sending a keyword as parameter `<q>`.
Or go to route `/api` to see API documentation in Swagger
