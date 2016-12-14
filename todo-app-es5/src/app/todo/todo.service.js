(function() {
  'use strict';

  angular
    .module('todo.app')
    .service('TodoService', TodoService);

  function TodoService($http, API_BASE_URL) {
    'ngInject';

    function fullUrl(context) {
      return API_BASE_URL+'/'+context;
    }

    function extractData(response) {
      return response.data;
    };

    this.findAll = function () {
      return $http.get(fullUrl('todos')).then(extractData);
    };

    this.get = function (id) {
      var uri = 'todos/' + id;
      return $http.get(fullUrl(uri)).then(extractData);
    };

    this.save = function (todo) {
      return $http.post(fullUrl('todos'), todo).then(extractData);
    };

    this.update = function (todo) {
      var uri = 'todos/' + todo._id;
      return $http.put(fullUrl(uri), todo).then(extractData);
    };

    this.delete = function (id) {
      var uri = 'todos/'+ id;
      return $http.delete(fullUrl(uri)).then(extractData);
    };

  }//constructor end.

})();
