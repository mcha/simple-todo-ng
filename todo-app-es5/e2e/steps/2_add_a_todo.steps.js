
module.exports = function() {
  var expect = require('./expect').expect;
  var todosPage = require('../po/todos.html');

  this.Given(/^I add "([^"]*)" to the todo list$/, function (todoLabel/*, callback*/) {
    var todoPage = require('../po/todo.html');
    return todosPage.newButton.click()
      .then(function () {
      return todoPage.todoLabelInput.sendKeys(todoLabel);
    }).then(function() {
      return todoPage.saveButton.click();
    });
  });

  this.Then(/^i Should see "([^"]*)" in the todo list$/, function (todoLabel/*, callback*/) {
    return expect(todosPage.todoLabels.getText()).to.eventually.contain(todoLabel);
  });


}
