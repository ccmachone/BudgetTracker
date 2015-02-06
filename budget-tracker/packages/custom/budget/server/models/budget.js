'use strict';
/*jshint plusplus: false*/

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

/**     
 * Budget Schema
 */
var BudgetSchema = new Schema({
    id: Number,
    name: String,
    owners: [Number],
    participants: [Number],
    envelopes: [Number],
    frequency: String
});

/**
 * Methods
 */
BudgetSchema.methods = {

    getBudgetAmount: function() {
        var amount = 0;
        for (var i = 0; i < this.envelopes.length; i++) {
            amount += this.envelopes[i].getBudgetAmount();
        }
        return amount;
    },

    getCurrentAmount: function() {
        var amount = 0;
        for (var i = 0; i < this.envelopes.length; i++) {
            amount += this.envelopes[i].getCurrentAmount();
        }
        return amount;
    },

    getJSON : function() {
        var result = {};

        result.id = this.id;
        result.name = this.name; 
        result.owners = this.owners; 
        result.participants = this.participants; 
        result.envelopes = this.envelopes; 
        result.frequency = this.frequency; 

        return JSON.stringify(result);
    }
};

mongoose.model('Budget', BudgetSchema);
