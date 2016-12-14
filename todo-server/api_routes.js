
var express = require('express');
var apiRouter = express.Router();
var todoService = require ("./TodoService.js");
//var todoService = require ("./TodoServiceMongo.js");
var Todo = todoService.Todo;

//define API routes
apiRouter.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

var ensure = function(pm) {
	if (!!pm.done) {
		pm.done();
	}else{
		pm.end();
	}
};

apiRouter.route("/todos")
			.get(function(req,res) {

				ensure(todoService.findAll()
				.then(function(todos) {
					res.json(todos);
				}));
			})
			.post(function(req,res) {
				console.log(req);
				var data = req.body;
				console.log("Received data : ", data);
				var todo;
				todo = new Todo(data);

				ensure(
					todoService.save(todo)
					.then(function() {
					res.sendStatus(201);
				}));
			});
			

apiRouter.route("/todos/:id")
			.get(function(req,res) {
				ensure(
					todoService.findById(req.params.id)
					.then(function(todo) {
						res.json(todo);
					})
				);
			})
			.put(function(req,res) {
				ensure(
					todoService.findById(req.params.id)
					.then(function (todo) {
						todo.label = req.body.label;
						return todoService.update(todo);
					}).then(function() {
						res.sendStatus(200);
					})
				);
			})
			.delete(function(req,res) {
				ensure(
					todoService.deleteById(req.params.id)
						.then(function () {
						res.sendStatus(200);
					})
				);
			});

exports.apiRouter = apiRouter;
