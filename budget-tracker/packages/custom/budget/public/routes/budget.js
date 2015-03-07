'use strict';

angular.module('mean.budget').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('account', {
      url: '/account',
      templateUrl: 'budget/views/index.html'
    });
  }
]);
