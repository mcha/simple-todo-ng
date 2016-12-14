module.exports = function() {
  var expect = require('./expect').expect;
  var todosPage = require('../po/todos.html');

  this.Then(/^I should see the "([^"]*)"$/, function (expected/*, callback*/) {
    //expect(page.header.getText()).to.eventually.equal(expected).and.notify(callback);
    return expect(todosPage.header.getText()).to.eventually.equal(expected);
  });

}
