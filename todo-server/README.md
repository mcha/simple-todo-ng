# UI POC Express server

This is a simple TODO Node Express application that deploy a REST API for UI POC Apps.

## API
Look at api_routes.js

## Services

* TodoService.js : Local in memory storage
* TodoServiceMongo.js : Mongo storage

To be configured in api_routes.js and in webapp_routes.js

## Start the server

* node server.js
* Live reload :
  * npm install -g nodemon
  * nodemon server.js

A simple Todo Express App UI is deployed at http://localhost:3000/



