# hapi-tsoa-integration

The purpose of the project is to integrate Hapi and Tsoa, comparing the advantages and disadvantages of using Hapi instead of the more popular Node's framework, Express.
By using Tsoa, a swagger documentation will be generated for the endpoints.

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Project setup

- generate a plain old package.json file
```
npm init
```
- create a tsconfig.json file 
```
tsc --init
```
- install typescript globally
```
npm install -g typescript --save
```
- install mongodb
```
brew update
brew install mongodb
```
- for the moment, add some data in the book-db mongo database (a post method will be added as well to populate the database)

### Installing

When starting the project, a mongodb instance has to be started, by running ```mongod```.
The following commands have to be run in order to start the application.
```
npm run build
npm start
```

Go to http://localhost:3000/api/v1/books to see the retrieved data from the database.
Go to http://localhost:3000/api/v1/redoc.html to see the generated documentation.
