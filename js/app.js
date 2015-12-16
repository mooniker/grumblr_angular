// angular.module('grumblr', ['ui.router']);
'use strict';

(function() {
  angular
    .module('grumblr', [
      'ui.router',
      'grumbles'
    ])
    .config([
      '$stateProvider',
      // '$locationProvider',
      RouterFunction
    ]);

    function RouterFunction($stateProvider, $locationProvider) {
      // $locationProvider.html5mode(true);
      $stateProvider
      .state('grumbleIndex', {
        url: '/grumbles',
        // template: "I'm the Grumbles index!"
        templateUrl: 'js/grumbles/index.html',
        controller: 'GrumbleIndexController',
        controllerAs: 'GrumbleIndexViewModel'
      })
      .state('grumbleShow', {
        url: '/grumbles/:id',
        templateUrl: 'js/grumbles/show.html',
        controller: 'GrumbleShowController',
        controllerAs: 'GrumbleShowViewModel'
      });
    }
})();
