'use strict';

/**
 * Module dependencies.
 */
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;

/**     
 * Budget Schema
 */
var UserSchema = new Schema({
    firstName: {
    	type: String,
    	unique: true,
    	required: true
    },
    lastName: String,
    username: {
    	type: String,
    	unique: true, 	//forces username to be unique
    	trim: true, 	//removes whitespace from around username
    	index: true,	//speeds up lookups by username
    	required: true,	//forces a username in order to save
    	validate: [		//custom validator
    		function(username) {
    			return username.length >= 3;
    		},
    		'Username must be atleast 3 characters long']
    },
    email: {
    	type: String,
    	unique: true,
    	required: true,
    	match: /.+\@.+\..+/	//forces proper email format
    },
    budgets: [Number]
});

/**
 * Methods
 */
UserSchema.methods = {

};

mongoose.model('Profile', UserSchema);
