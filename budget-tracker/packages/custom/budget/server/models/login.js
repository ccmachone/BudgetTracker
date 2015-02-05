/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

/**     
 * Budget Schema
 */
var LoginSchema = new Schema({
    userId: Number,
    ip: Number,
    username: String
});

/**
 * Methods
 */
LoginSchema.methods = {

};

mongoose.model('Login', LoginSchema);
