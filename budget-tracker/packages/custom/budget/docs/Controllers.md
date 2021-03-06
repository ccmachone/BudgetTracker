### BaseController

BaseController contains some generic functions that can be used to assist in creating controllers for api end points.  CRUD functions all have override-able errback/callback methods that can be modified to give custom responses.

#### respondToError

This is just a generic way to respond to errors (makes it uniform).  If we wanted we could do some checks to see if it's a dev environment or not and respond with more details if it is.

#### create

This is a generic create method that can be called to add documents to the database.  The parameters are specified as follows:


```
req
res
next
schemaObj - schemaObject to be saved (example: new Budget(req.body))
(optional)errback*
(optional)callback*
```

#### readQuery

Generic way to respond to read api end points.

```
req
res
next
schemaModel - schemaModel to be used to lookup item (example: Budget)
(optional)errback*
(optional)callback*
```

#### update

Generic way to respond to update api end points

```
req
res
next
schemaModel - schemaModel to be used to lookup item (example: Budget)
id - id of document in database to update
json - object to update database with
(optional)errback*
(optional)callback*
```

#### Additional Notes

*The errback/callback has default values, although if we want to customize how individual "create" api endpoints respond we can do so by giving them anonoymous functions.

#### Examples

Here is some example code for envelope CRUD methods

```javascript
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	BaseController = require('./basecontroller'),
    Envelope = mongoose.model('Envelope');


exports.create = function(req, res, next) {
	var envelope = new Envelope(req.body);
	BaseController.create(req, res, next, envelope, function(req, res, next, err) {
		console.log('custom errback function');
		res.status(400).send('err');
	}, function(req, res, next, obj) {
		console.log('custom callback function');
		res.status(200).send('great success');
	});
};

exports.read = function(req, res, next, id) {
	BaseController.get(req, res, next, Envelope, id);
};

exports.update = function(req, res, next, id) {
	BaseController.update(req, res, next, Envelope, id, req.body);
};

exports.delete = function(req, res, next, id) {
	BaseController.delete(req, res, next, Envelope, id);
};

```