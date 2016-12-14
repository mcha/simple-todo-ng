'use strict';

describe('Todos controller', function() {
  var vm;
  var rootScope;
  var sleep = {_id:1, label:"Sleep..."};
  var play = {_id:2, label:"Play..."};
  var todos = [sleep, play];

  beforeEach(angular.mock.module('todo.app'));

  beforeEach(angular.mock.inject(function ($controller, TodoService, $q, $log, $rootScope) {
    spyOn(TodoService, 'findAll').and.returnValue($q.when(todos));
    vm = $controller('TodosController', {
      'TodoService' : TodoService,
      '$log' : $log
    });
    rootScope = $rootScope;
  }));

  it('should have populate todos', function () {
    rootScope.$digest();
    expect(angular.isArray(vm.todos)).toBeTruthy();
    expect(vm.todos.length === todos.length).toBeTruthy();

    expect(vm.todos).toEqual(todos);

    // vm.todos.map(function (todo) {console.log(todo);});
  });

});
