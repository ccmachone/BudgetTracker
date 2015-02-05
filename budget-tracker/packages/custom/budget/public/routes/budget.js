'use strict';

angular.module('mean.budget').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('budget example page', {
      url: '/budget/example',
      templateUrl: 'budget/views/index.html'
    });
  }
]);
