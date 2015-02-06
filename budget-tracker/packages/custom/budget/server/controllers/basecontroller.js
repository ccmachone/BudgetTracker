'use strict';


exports.respondToError = function(req, res, next, err) {
	res.status(400).send('Bad Request');
};

exports.createQuery = function(req, res, next, schemaObj, errback, callback) {
	errback = errback || function(err) { 
		exports.respondToError(req, res, next, err);
	};

	callback = callback || function() {
			res.status(200).send('Awesome Request');
	};

    schemaObj.save(function(err) {
        if (err) {
            errback(req, res, next, err);
        } else {
            callback();
        }
    });
};

exports.readQuery = function(req, res, next, schemaModel, id, errback, callback) {
	errback = errback || function(err) { 
		exports.respondToError(req, res, next, err);
	};

	callback = callback || function(obj) {
		res.status(200).json(obj.getJSON()).send();
	};

    var query  = schemaModel.where({ id: id });
    query.findOne(function (err, obj) {
        if (err)
        	errback(err);
        else if (obj)
        	callback(obj); 
        else
        	errback('');
    });
};

exports.update = function(req, res, next, schemaModel, id, json, errback, callback) {
	errback = errback || function(err) { 
		exports.respondToError(req, res, next, err);
	};

	callback = callback || function(obj) {
		res.status(200).send('Update successful');
	};


	var query = {id : id };
	var obj = {};

	for(var key in json) {
		obj[key]=json[key];
	}

	//no way to tell if this succeeds or not
	//huh is always the same object
	//and doc is always null...?
	var huh = schemaModel.findOneAndUpdate(query, obj, function(doc) {
			console.log(doc);
			if(doc) {
				callback(doc);
			} else {
				errback('');
			}
		}
	);
	console.log(huh);

};

exports.deleteQuery = function(req, res, next, schemaModel, id, errback, callback) {
	errback = errback || function(err) { 
		exports.respondToError(req, res, next, err);
	};

	callback = callback || function(obj) {
		res.status(200).send('Id ' + id + ' successfully removed');
	};

    var query  = schemaModel.where({ id: id });
    query.findOneAndRemove(function (err, obj) {
        if (err) errback(err);
        if (obj) {
           callback(obj);
        }
    });
};

exports.getAll = function(SchemaModel, req, res, next, errback, callback) {

	errback = errback || function(err) { 
		exports.respondToError(req, res, next, err);
	};

	callback = callback || function(objs) {
		res.status(200).send(objs);
	};

	SchemaModel.find(function(err, objs) {
		if(err) {
			errback(err);
		} else {
			callback(objs);
		}
	});
};