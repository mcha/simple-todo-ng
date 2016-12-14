'use strict';

describe('Todo service', function() {

  var sleep = {_id:1, label:"Sleep..."};
  var play = {_id:2, label:"Play..."};
  var TODOS = [sleep, play];

  var todoService;
  var $httpBackend;
  var TODOS_URL;

  beforeEach(angular.mock.module('todo.app'));

  beforeEach(angular.mock.inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.when('GET', TODOS_URL).respond(200, TODOS);

    TODOS_URL = $injector.get('API_BASE_URL') +'/todos';
    todoService = $injector.get('TodoService');
  }));


  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should have get todos', function () {
    var processResult = function (todos) {
      expect(angular.isArray(todos)).toBeTruthy();
      expect(todos.length === TODOS.length).toBeTruthy( );
      expect(todos).toEqual(TODOS);
      // todos.map(function (todo) { console.log(todo); });
    };

    todoService.findAll().then(processResult);

    $httpBackend.expectGET(TODOS_URL);
    $httpBackend.flush();
  });

});
