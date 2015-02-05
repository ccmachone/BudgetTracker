'use strict';

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
    particpants: [Number],
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
    }
};

mongoose.model('Budget', BudgetSchema);
