'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Budget = new Module('budget');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Budget.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Budget.routes(app, auth, database);

    
    
    Budget.aggregateAsset('css', 'budget.css');
    Budget.aggregateAsset('js', 'jquery.min.js');

    app.set('views', __dirname + '/server/views');

    return Budget;
});
