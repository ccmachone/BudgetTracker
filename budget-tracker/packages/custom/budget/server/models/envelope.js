'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

/**     
 * Budget Schema
 */
var EnvelopeSchema = new Schema({
	budgetId: {
		type: Schema.ObjectId,
		ref: 'Budget',
		required: 'budgetId is required'
	},
	name: {
		type: String,
		required: 'name is required'
	},

	budgetAmount: {
		type: Number,
		required: 'budgetAmount is required'
	},
	currentAmount: {
		type: Number
		// default: ?
	},
	rollOver: {
		canRollOver: Boolean,
		amount: Number,
		date: Date
	}
});

/**
 * Methods
 */
EnvelopeSchema.methods = {
	
	getBudgetAmount: function() {
		return this.budgetAmount;
	},

	getCurrentAmount: function() {
		return this.currentAmount;
	}
};

mongoose.model('Envelope', EnvelopeSchema);
