'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Budget, app, auth, database) {

  app.get('/budget/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/budget/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/budget/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/budget/example/render', function(req, res, next) {
    Budget.render('index', {
      package: 'budget'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};