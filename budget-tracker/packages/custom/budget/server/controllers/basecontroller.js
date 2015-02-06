'use strict';


exports.respondToError = function(req, res, next, err) {
	res.status(400).send('');
};

exports.create = function(req, res, next, schemaObj, errback, callback) {
	errback = errback || function(err) { 
		exports.respondToError(req, res, next, err);
	};

	callback = callback || function(req, res, next) {
			res.status(200).send('Awesome Request');
	};

    schemaObj.save(function(err) {
        if (err) {
            errback(req, res, next, err);
        } else {
            callback(req, res, next);
        }
    });
};

exports.get = function(req, res, next, schemaModel, id, errback, callback) {
	errback = errback || function(err) { 
		exports.respondToError(req, res, next, err);
	};

	callback = callback || function(req, res, next, obj) {
		res.status(200).json(obj.getJSON()).send();
	};

    var query  = schemaModel.where({ id: id });
    query.findOne(function (err, obj) {
        if (err)
        	errback(req, res, next, err);
        else if (obj)
        	callback(req, res, next, obj); 
        else
        	errback(req, res, next, '');
    });
};

exports.update = function(req, res, next, schemaModel, id, json, errback, callback) {
	errback = errback || function(err) { 
		exports.respondToError(req, res, next, err);
	};

	callback = callback || function(req, res, next, obj) {
		res.status(200).send('Update successful');
	};


	var query = {id : id };
	var obj = {};

	for(var key in json) {
		obj[key]=json[key];
	}

	schemaModel.findOneAndUpdate(query, obj, function(err, doc) {
			if(err) {
				errback(req, res, next, err);
			}
			else if(doc) {
				callback(req, res, next, doc);
			} else {
				errback(req, res, next, '');
			}
		}
	);

};

exports.delete = function(req, res, next, schemaModel, id, errback, callback) {
	errback = errback || function(err) { 
		exports.respondToError(req, res, next, err);
	};

	callback = callback || function(req, res, next, obj) {
		res.status(200).send('Id ' + id + ' successfully removed');
	};

    var query  = schemaModel.where({ id: id });
    query.findOneAndRemove(function (err, obj) {
        if (err) errback(req, res, next, err);
        if (obj) {
           callback(req, res, next, obj);
        }
    });
};

exports.getAll = function(SchemaModel, req, res, next, errback, callback) {

	errback = errback || function(err) { 
		exports.respondToError(req, res, next, err);
	};

	callback = callback || function(req, res, next, objs) {
		res.status(200).send(objs);
	};

	SchemaModel.find(function(err, objs) {
		if(err) {
			errback(req, res, next, err);
		} else {
			callback(req, res, next, objs);
		}
	});
};