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

  //TODO - Create function in envelopes to get entire budget amount
    getBudgetAmount: function() {
        var amount = 0;
        // $.each(this.envelopes, function() {
            //loop through each envelope and get total
        // });

    return amount;
  }
};

mongoose.model('Budget', BudgetSchema);
