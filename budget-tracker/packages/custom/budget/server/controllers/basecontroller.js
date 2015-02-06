'use strict';


exports.respondToError = function(res, code, msg) {
	res.status(code).send(msg);
};

exports.create = function(req, res, next, schemaObj, errback, callback) {
	errback = errback || function(res, code, msg) { 
		exports.respondToError(res, code, msg);
	};

	callback = callback || function(req, res, next) {
			res.status(200).send('Create successful');
	};

    schemaObj.save(function(err) {
        if (err) {
            errback(res, 400, 'Create failed');
        } else {
            callback(req, res, next);
        }
    });
};

exports.get = function(req, res, next, schemaModel, id, errback, callback) {
	errback = errback || function(res, code, msg) { 
		exports.respondToError(res, code, msg);
	};

	callback = callback || function(req, res, next, obj) {
		res.status(200).json(obj.getJSON()).send('Read Successful');
	};

    var query  = schemaModel.where({ id: id });
    query.findOne(function (err, obj) {
        if (err) {
        	errback(res, '400', 'Read Failed');
        }
        else if (obj) {
        	callback(req, res, next, obj); 
        }
        else {
        	errback(res, '500', 'Server Error');
        }
    });
};

exports.update = function(req, res, next, schemaModel, id, json, errback, callback) {
	errback = errback || function(res, code, msg) { 
		exports.respondToError(res, code, msg);
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
				errback(res, '400', 'Update Failed');
			}
			else if(doc) {
				callback(req, res, next, doc);
			} else {
				errback(res, '500', 'Server Error');
			}
		}
	);
};

exports.delete = function(req, res, next, schemaModel, id, errback, callback) {
	errback = errback || function(res, code, msg) { 
		exports.respondToError(res, code, msg);
	};

	callback = callback || function(req, res, next, obj) {
		res.status(200).send('Id ' + id + ' successfully deleted');
	};

    var query  = schemaModel.where({ id: id });
    query.findOneAndRemove(function (err, obj) {
        if (err) {
        	errback(res, '400', 'Delete failed');
        }
        if (obj) {
           callback(req, res, next, obj);
        } else {
        	errback(res, '500', 'Server Error');
        }
    });
};

exports.getAll = function(SchemaModel, req, res, next, errback, callback) {

	errback = errback || function(err) { 
		exports.respondToError();
	};

	callback = callback || function(req, res, next, objs) {
		res.status(200).send(objs);
	};

	SchemaModel.find(function(err, objs) {
		if(err) {
			errback();
		} else {
			callback(req, res, next, objs);
		}
	});
};