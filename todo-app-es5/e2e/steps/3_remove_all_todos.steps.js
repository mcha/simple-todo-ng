module.exports = function() {
  var expect = require('./expect').expect;
  var todosPage = require('../po/todos.html');

  this.Given(/^I remove all todos$/, function () {
    return todosPage.todoLabels.then(function (labels) {
      labels.forEach(function() {
        todosPage.todoDeleteButton.click();
      });
    });
  });

  this.Then(/^The todo list should be empty$/, function () {
    return expect(todosPage.todoLabels).to.eventually.be.empty;
  });

}
