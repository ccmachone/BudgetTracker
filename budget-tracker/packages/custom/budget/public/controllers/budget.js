'use strict';

/* jshint -W098 */
angular.module('mean.budget').controller('BudgetController', ['$scope', 'Global', 'Budget',
  function($scope, Global, Budget) {
    $scope.global = Global;
    $scope.package = {
      name: 'budget'
    };
  }
]);
