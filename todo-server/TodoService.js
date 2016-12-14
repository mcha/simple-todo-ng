var _ = require("underscore");
var Q = require("q");

var Todo = function(todo) {
	this._id = _.uniqueId();
	this.label = todo.label;
};

var todos = [];

var promise = function (data) {
	return Q.fcall(function () {return data;});
};

var findAll = function () {
	console.log("Todos : ", todos);
	return promise(todos);
}

var save = function (todo) {
	todos.push(todo);
	return promise(true);
}

var deleteById = function (id) {
	todos = _.reject(todos, function (todo) {
		return todo._id==id;
	});
	return promise();
}

var update = function (todo) {
	var deferred = Q.defer();
	findById(todo._id).then(function (todoToUpdate) {
		todoToUpdate.label = todo.label;
		deferred.resolve(true);
	});
	return deferred.promise;
}

var findById = function (id) {
	var todo = _.find(todos, function (todo) {
		return todo._id==id;
	});
	console.log("Found : ", todo);
	return promise(todo);
}

exports.findById = findById;
exports.update = update;
exports.save = save;
exports.findAll = findAll;
exports.deleteById = deleteById;
exports.Todo = Todo;
