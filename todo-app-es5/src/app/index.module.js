
(function() {
  'use strict';
  require('./vendors.module');
  require('./index.scss');
  require('./todo/directives/todo.directive.module');

  angular
    .module('todo.app', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngRoute', 'ui.bootstrap', 'todo.directive']);

  require('./index.constants');
  require('./index.config');
  require('./index.route');
  require('./index.run');

  require('./todo/todo.service');
  require('./todo/todo.controller');
  require('./todo/todos.controller');

})();
