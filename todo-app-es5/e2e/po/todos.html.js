/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.panelHeader = element(by.css('.panel-heading'));
  this.header = this.panelHeader.element(by.css('h3'));
  this.newButton = element(by.css('.btn.btn-success'));
  this.todos = element.all(by.repeater('todo in vm.todos'));
  this.todoLabels = element.all(by.css('form div#form-group div.form-control.ng-binding'));
  this.todoDeleteButton = element(by.css('.btn.btn-sm.btn-danger'));
};

module.exports = new MainPage();
