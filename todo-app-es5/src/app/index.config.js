(function() {
  'use strict';

  angular
    .module('todo.app')
    .config(config);

  function config($logProvider) {
    'ngInject';

    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
