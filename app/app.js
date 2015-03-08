(function () {
  'use strict';

  angular.module('app', [
    'ngRoute',
    'ui.router',
    'app.factories',
    'app.services',
    'app.filters',
    'app.directives',
    'app.controllers', 'lodash'
  ])
    .config(
      function ($locationProvider) {
        $locationProvider.html5Mode(false);
      }
    );

  angular.module('app.factories', []);
  angular.module('app.services', ['ngResource']);
  angular.module('app.filters', []);
  angular.module('app.directives', []);
  angular.module('app.controllers', []);

})();