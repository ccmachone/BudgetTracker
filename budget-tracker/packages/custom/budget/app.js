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

    app.set('views', __dirname + '/server/views');

    /**
      //Uncomment to use. Requires meanio@0.3.7 or above
      // Save settings with callback
      // Use this for saving data from administration pages
      Budget.settings({
          'someSetting': 'some value'
      }, function(err, settings) {
          //you now have the settings object
      });

      // Another save settings example this time with no callback
      // This writes over the last settings.
      Budget.settings({
          'anotherSettings': 'some value'
      });

      // Get settings. Retrieves latest saved settigns
      Budget.settings(function(err, settings) {
          //you now have the settings object
      });
      */

    return Budget;
});
