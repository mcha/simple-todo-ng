module.exports = function() {

  this.Given(/^I am on the homepage$/, function (/*callback*/) {
    //browser.get('/index.html').then(function () {
    //  //setTimeout(callback, 1000);
    //  callback();
    //});
    return browser.get('/index.html');
  });

}
