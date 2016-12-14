var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27018/todos");
var db = mongoose.connection;

db.on("error", function (error) {
	console.log("=== Mongoose connection Error ===");
	console.log(error);
});

db.once("open", function () {
	//console.log("=== Mongoose connection OK ===");
});

var todoSchema = mongoose.Schema({
	label: String
});

var Todo = mongoose.model("Todo", todoSchema);
//console.log("Todo model : ",Todo);

//Error handler listening on all error related to operation on Todo Model
Todo.on("error",function() {

});

var findAll = function () {
	var query = Todo.find();
	return query.exec();
};

var save = function (todo) {
	//console.log("Saving : ", todo);
	
	var promise = new mongoose.Promise;
	todo.save(function (error, saved) {
	
		if (error) promise.error(error);
		else {
			//console.log("Todo created : ", saved);
			promise.complete(saved);
		}
	});

	return promise;
};

var deleteById = function (id) {
	var promise = new mongoose.Promise;
	Todo.remove({ _id: id }, function (error, deleted) {
		if (error) promise.error(error);
		else {
			//console.log("Number of Todo deleted : ", deleted);
			promise.complete(deleted);
		}
	});
	return promise;
};

var update = function (todo) {
	var promise = new mongoose.Promise;
	todo.save(function (error, updated) {	
		if (error) promise.error(error);
		else {
			//console.log("Number of Todo updated : ", updated);
			promise.complete(updated);
		}
	});
	return promise;
};

var findById = function (id) {
	var query = Todo.findById(id);
	return query.exec();
};

exports.findById = findById;
exports.update = update;
exports.save = save;
exports.findAll = findAll;
exports.deleteById = deleteById;
exports.Todo = Todo;
