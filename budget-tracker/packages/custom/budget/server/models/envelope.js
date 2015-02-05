/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

/**     
 * Budget Schema
 */
var EnvelopeSchema = new Schema({
	id: Number,
	budgetId: Number,
	name: String,
	budgetAmount: Number,
	currentAmount: Number,
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

};

mongoose.model('Envelope', EnvelopeSchema);
