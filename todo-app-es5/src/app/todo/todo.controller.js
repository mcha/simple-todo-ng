(function() {
  'use strict';

  angular
    .module('todo.app')
    .controller('TodoController', TodoController);

  //////////////////////////////////////////////////////////////

  function TodoController(TodoService, $routeParams, $log, $location) {
    'ngInject';

    var vm = this;

    var TODO_METHODS = {
      isNew : function () {
        var result = !(this._id);
        $log.debug("Todo : ",this);
        $log.debug("isNew : ",result);
        return result;
      }
    };

    vm.handleError = function (error) {
      $log.error("Processing failed !", error);
    };

    vm.refresh = function () {
      $log.debug("Refreshing...");
      vm.findAll();
    };

    vm.navigateTodos = function () {
      $location.path("/todos");
    };

    vm.get = function (id) {
      TodoService.get(id).then(function (todo) {
        vm.todo = todo;
        _.merge(vm.todo, TODO_METHODS);
        $log.debug("Retrieved : ", vm.todo);
      });
    };

    vm.save = function () {
      $log.debug("Saving : ", vm.todo);
      if (this.todo.isNew()) {
        $log.debug("Creating : ", vm.todo);
        TodoService.save(vm.todo).then(function () {
          $log.debug("Saved : ", vm.todo);
          vm.navigateTodos();
        });
      }else{
        vm.update();
      }
    };

    vm.update = function () {

      if (vm.todo.isNew()) {
        return;
      }

      $log.debug("Updating : ",vm.todo);
      TodoService.update(vm.todo).then(function () {
        $log.debug("Updated : ", vm.todo);
        vm.navigateTodos();
      });
    };

    //
    vm.todo = {};
    _.merge(vm.todo, TODO_METHODS);

    if ($routeParams.id!=="new") {
      vm.get($routeParams.id);
    }
    //

  }//constructor end.

})();
