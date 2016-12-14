var express = require('express');
var morgan = require('morgan')
var bodyParser = require('body-parser')
var path = require('path');
var multer = require('multer');

//Routes loading
var api = require('./api_routes.js');
var apiRouter = api.apiRouter;

//App instantiation
var app = express();
app.use(morgan("dev"));

var jsonParser = bodyParser.json()

//Body Parsers
app.use(jsonParser);
app.use(bodyParser.urlencoded({ extended: true }));

//multipart handling
app.use(multer());

//Routes mounting
app.use("/api", apiRouter); //mount apiRouter on /api

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Todo app listening at http://%s:%s', host, port);

});
