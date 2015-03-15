'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global',
  function($scope, Global) {
    $scope.global = Global;
    
    $scope.addEnvelope = function(){
      console.log(this.envname);
    };
	
	$scope.oneAtATime = true;
	$scope.status = {
		isFirstOpen: false,
		isFirstDisabled: false
	};
   
  }
]);
