'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global', 'Envelopes', 'Budgets', 'BudgetService', 'Envelope', 'Transactions', 'Transaction',
  function($scope, Global, Envelopes, Budgets, BudgetService, Envelope, Transactions, Transaction) {
    $scope.global = Global;
    $scope.budgetId = 1;

    Budgets.query(function(budgets){
    	if(budgets.length === 0) {
    		//console.log($scope.global.user);
    		var budget = {name:'Default', owners: [$scope.global.user._id], participants:[$scope.global.user._id], envelopes:[], frequency: 'monthly' };
    		BudgetService.save(budget, function(budgetId){
    			$scope.getEnvelopes(budgetId._id);
    		});
    	}
    	else {
    		$scope.getEnvelopes(budgets[0]._id);
    	}

    });



    $scope.envelopes = [];

    $scope.getEnvelopes = function(budgetId){
    	$scope.budgetId = budgetId;
    	//console.log(budgetId);
    	Envelopes.query({budgetId: budgetId}, function(envelopes){
    		//console.log(envelopes);
    		$scope.envelopes = envelopes;
    	});
    };


    $scope.viewTransactions = function(envelope) {
    	Transactions.query({envelopeId: envelope._id}, function(transactions){
    		envelope.transactionHistory = transactions;
    	});
    };

    $scope.makeTransaction = function(envelope, spentAmount, description) {
    	console.log(spentAmount);
    	envelope.currentAmount = envelope.currentAmount - spentAmount;
    	envelope.id = envelope._id;
    	Envelope.update(envelope, function(envelopes){
    		var transaction = {envelopeId: envelope.id, amount: spentAmount, entity: 'no clue', description: description, type: 'Withdrawal'};
    		Transaction.save(transaction, function(transaction){

    		});
    		$scope.getEnvelopes($scope.budgetId);
    	});
    };

    $scope.deleteEnvelope = function(envelope){
    	console.log(envelope);
    	Envelope.remove({id: envelope._id}, function(envelopes){
    		
    		$scope.getEnvelopes($scope.budgetId);
    	});
    };
    
    $scope.addEnvelope = function(){
		
		if(this.envname === undefined || this.envamt === undefined ||
			this.envname === '' || this.envamt === '' )
		{
			alert('One or more fields empty');
			return;
		}
      //console.log(this.envname);
	  //console.log(this.envamt);
	  var envelope = {budgetId: $scope.budgetId, name: this.envname, budgetAmount: this.envamt, currentAmount: this.envamt};
	  Envelope.save(envelope, function(){
	  	$scope.getEnvelopes($scope.budgetId);
	  });
	  
	  this.envname = '';
	  this.envamt = '';
    };
	
	$scope.oneAtATime = true;
	$scope.status = {
		isFirstOpen: false,
		isFirstDisabled: false
	};

	
   
  }]);
