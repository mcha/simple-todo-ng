/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var TodoPage = function() {
  this.todoLabelInput = element(by.model('vm.todo.label'));
  this.saveButton = element(by.css('.btn.btn-sm.btn-success'));
};

module.exports = new TodoPage();
