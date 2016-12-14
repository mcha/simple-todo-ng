'use strict';

describe('The main view', function () {
  var chai = require('chai');
  var chaiAsPromised = require('chai-as-promised');

  chai.use(chaiAsPromised);
  var expect = chai.expect;
  var page;

  beforeEach(function () {
    browser.get('/todos');
    page = require('./todos.po');
  });

  it('should have "Todo List" as title', function() {
    expect(page.header.getText()).to.eventually.equal('Todo List');
  });

});
