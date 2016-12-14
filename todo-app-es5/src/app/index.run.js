(function() {
  'use strict';

  angular
    .module('todo.app')
    .run(runBlock);

  function runBlock($log) {
    'ngInject';

    $log.debug('runBlock end');
  }

})();
