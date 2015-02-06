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

    //We are adding a link to the main menu for all authenticated users
    Budget.menus.add({
      title: 'budget example page',
      link: 'budget example page',
      roles: ['authenticated'],
      menu: 'main'
    });
    
    Budget.aggregateAsset('css', 'budget.css');
    Budget.aggregateAsset('js', 'jquery.min.js');

    app.set('views', __dirname + '/server/views');

    return Budget;
});
