'use strict'

describe('Directive mca-todo', function() {
  var vm;
  var element;
  var scope;
  var ID=1;
  var LABEL = "Sleep more...";

  beforeEach(angular.mock.module('todo.directive'));

  beforeEach(angular.mock.inject(function($compile, $rootScope) {

    element = angular.element('<mca-todo todo="todo"></mca-todo>');

    scope = $rootScope.$new();
    scope.todo = { _id: ID, label: LABEL};

    $compile(element)(scope);
    $rootScope.$digest();
    vm = element.isolateScope().vm;
  }));

  it('should be compiled and have placeholder filled', function () {
    var $ = require('jquery');
    expect($(element.html()).find('div.form-control').text()).toEqual(LABEL);
  });

  it('should have isolate scope object with filled attributes', function () {
    expect(vm.todo._id).toEqual(ID);
    expect(vm.todo.label).toEqual(LABEL);
  });
});
