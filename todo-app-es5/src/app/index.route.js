(function() {
  'use strict';

  var todoTemplate = require('ngtemplate!html!./todo/todo.html');
  var todosTemplate = require('ngtemplate!html!./todo/todos.html');

  angular
    .module('todo.app')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    'ngInject';

    var todosConfig = {
      templateUrl: todosTemplate,
      controller: 'TodosController',
      controllerAs: 'vm'
    };

    $routeProvider
      .when('/todos', todosConfig)
      .when('/todos/todo/:id', {
        templateUrl: todoTemplate,
        controller: 'TodoController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/todos'
      });
  }

})();
