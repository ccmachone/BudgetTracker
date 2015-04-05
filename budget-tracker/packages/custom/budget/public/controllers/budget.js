'use strict';

/* jshint -W098 */
angular.module('mean.budget').controller('BudgetController', ['$scope', 'Global', 'Budget',
  function($scope, Global, Budget) {
    $scope.global = Global;
    $scope.package = {
      name: 'budget'
    };
	
	$scope.fullname = Global.user.name;
	$scope.username = Global.user.username;
	$scope.email = Global.user.email;
	
	$scope.noEdit = false;
	$scope.edit = true;
	
	$scope.editAccount = function(){
		this.noEdit = true;
		this.edit = false;
		
		this.newName = this.fullname;
		this.newUsername = this.username;
		this.newEmail = this.email;
	};
	
	$scope.updateUser = function(){
		this.noEdit = false;
		this.edit = true;

		this.fullname = this.newName;
		this.username = this.newUsername;
		this.email = this.newEmail;
	};
	
	$scope.cancelUpdate = function(){
		this.noEdit = false;
		this.edit = true;	
	};
	
	console.log(Global.user);
  }
]);
