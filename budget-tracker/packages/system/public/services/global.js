'use strict';

//Global service for global variables
angular.module('mean.system').factory('Global', [

  function() {
    var _this = this;
    _this._data = {
      user: window.user,
      authenticated: false,
      isAdmin: false
    };
    if (window.user && window.user.roles) {
      _this._data.authenticated = window.user.roles.length;
      _this._data.isAdmin = window.user.roles.indexOf('admin') !== -1;
    }
    return _this._data;
  }
]).factory('Envelopes', ['$resource',
  function($resource) {
    return $resource('envelopes/:budgetId', {
      budgetId: '@budgetId'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]).factory('Envelope', ['$resource',
  function($resource) {
    return $resource('envelope/:id', {
      id: '@id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]).factory('Budgets', ['$resource',
  function($resource) {
    return $resource('budgets/:id', {
      id: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]).factory('BudgetService', ['$resource',
  function($resource) {
    return $resource('budget/:id', {
      id: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]).factory('Transactions', ['$resource',
  function($resource) {
    return $resource('transactions/:envelopeId', {
      envelopeId: '@envelopeId'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]).factory('Transaction', ['$resource',
  function($resource) {
    return $resource('transaction/:id', {
      id: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
