(function() {
  'use strict';

  angular
    .module('todo.app')
    .controller('TodosController', TodosController);

  //////////////////////////////////////////////////////////////

  function TodosController(TodoService, $log) {
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

    vm.enhanceTodos = function (todos) {
      _.each(todos, function (todo) {
        _.merge(todo, TODO_METHODS);
      });
    };

    vm.refresh = function () {
      $log.debug("Refreshing...");
      vm.findAll();
    };

    vm.findAll = function () {
      TodoService.findAll().then(function (todos) {
          vm.todos = todos;
          vm.enhanceTodos(vm.todos);
          $log.debug("Todos : ", todos);
      }).catch(vm.handleError);
    };

    vm.delete = function (id) {
      TodoService.delete(id).then(function () {
        $log.debug("Deleted : ", id);
        vm.refresh();
      }).catch(vm.handleError);
    };

    vm.save = function (todo) {
      $log.debug("Saving : ",todo);
      if (todo.isNew()) {
        $log.debug("Creating : ",todo);
        TodoService.save(todo).then(function() {
          $log.debug("Saved : ",todo);
          vm.refresh();
        });
      }else{
        vm.update(todo);
      }
    };

    vm.update = function (todo) {
      if (todo.isNew()) {
        return;
      }

      $log.debug("Updating : ",todo);
      TodoService.update(todo).then(function() {
        $log.debug("Updated : ", todo);
        vm.refresh();
      });
    };

    vm.refresh();

  }//constructor end.

})();
