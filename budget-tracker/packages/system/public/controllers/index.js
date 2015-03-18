'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global',
  function($scope, Global) {
    $scope.global = Global;
    
    $scope.addEnvelope = function(){
		
		if(this.envname === undefined || this.envamt === undefined ||
			this.envname === '' || this.envamt === '' )
		{
			alert('One or more fields empty');
			return;
		}
      console.log(this.envname);
	  console.log(this.envamt);
	  
	  this.envname = '';
	  this.envamt = '';
    };
	
	$scope.oneAtATime = true;
	$scope.status = {
		isFirstOpen: false,
		isFirstDisabled: false
	};
   
  }
]);
