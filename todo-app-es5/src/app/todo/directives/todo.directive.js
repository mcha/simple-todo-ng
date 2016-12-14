(function() {
  'use strict';

  require('./todo.directive.scss');

  var mcaTodo = {
    templateUrl: require('ngtemplate!html!./todo.directive.html'),
    controller: TodoDirectiveController,
    controllerAs: 'vm',
    bindings: {
      todo: '=',
      saveMethod: '&',
      delete: '&'
    }
  };

  angular
    .module('todo.directive')
    .component('mcaTodo', mcaTodo);

  //////////////////////////////////////////////////////////////

  function TodoDirectiveController($scope, $element, $log) {
    'ngInject';
    var vm = this;

    vm.save = function() {
      $log.debug("TodoDirective >> Saving : ", vm.todo);
      vm.saveMethod(vm.todo);
      vm.disableModification();
    };

    vm.enableModification = function () {
      vm.enabled = true;
    };

    vm.disableModification = function () {
      vm.enabled = false;
    };

    vm.$onInit = function () {
      vm.disableModification();
    };

    vm.$postLink = function () {
      $element.on('dblclick',function () {
        vm.enableModification();
        $scope.$digest();
        $element.find('input')[0].focus();
      });
    };

  }

})();

