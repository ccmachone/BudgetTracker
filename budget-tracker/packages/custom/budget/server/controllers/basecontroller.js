'use strict';


exports.respondToError = function(res, code, msg, devMsg) {
	if(process.env.NODE_ENV !== 'production' && devMsg) {
		res.status(code).send(devMsg);
	} else 
		res.status(code).send(msg);
};

exports.create = function(req, res, next, schemaObj, errback, callback) {
	errback = errback || function(res, code, msg, devMsg) { 
		exports.respondToError(res, code, msg, devMsg);
	};

	callback = callback || function(req, res, next, obj) {
			res.status(200).json(JSON.stringify(obj._id));
	};

    schemaObj.save(function(err, obj) {
        if (err) {
            errback(res, 400, 'Create failed', err);
        } else {
            callback(req, res, next, obj);
        }
    });
};

exports.get = function(req, res, next, schemaModel, id, errback, callback) {
	errback = errback || function(res, code, msg, devMsg) { 
		exports.respondToError(res, code, msg, devMsg);
	};

	callback = callback || function(req, res, next, obj) {
		res.status(200).json(obj.getJSON());
	};
	
    var query  = schemaModel.where({ _id: id });
    query.findOne(function (err, obj) {
        if (err) {
        	errback(res, '500', 'Server Error', err);
        }
        else if (obj) {
        	callback(req, res, next, obj); 
        }
        else {
        	errback(res, '400', 'Could not find', err);
        }
    });
};

exports.update = function(req, res, next, schemaModel, id, json, errback, callback) {
	errback = errback || function(res, code, msg, devMsg) { 
		exports.respondToError(res, code, msg, devMsg);
	};

	callback = callback || function(req, res, next, obj) {
		res.status(200).send();
	};

	var query = {_id : id};

	schemaModel.findOneAndUpdate(query, json, function(err, doc) {
			if(err) {
				errback(res, '500', 'Server Error', err);
			}
			else if(doc) {
				callback(req, res, next, doc);
			} else {
				errback(res, '400', 'Could not update', err);
			}
		}
	);
};

exports.delete = function(req, res, next, schemaModel, id, errback, callback) {
	errback = errback || function(res, code, msg, devMsg) { 
		exports.respondToError(res, code, msg, devMsg);
	};

	callback = callback || function(req, res, next, obj) {
		res.status(200).send();
	};

    var query  = schemaModel.where({ _id: id });
    
    query.findOneAndRemove(function (err, obj) {
        if (err) {
        	errback(res, '500', 'Server Error', err);
        }
        if (obj) {
           callback(req, res, next, obj);
        } else {
        	errback(res, '400', 'Could not delete', err);
        }
    });
};

exports.getAll = function(SchemaModel, req, res, next, errback, callback) {

	errback = errback || function(res, code, msg, devMsg) { 
		exports.respondToError(res, code, msg, devMsg);
	};

	callback = callback || function(req, res, next, objs) {
		res.status(200).send(objs);
	};

	SchemaModel.find(function(err, objs) {
		if(err) {
			errback(res, 400, 'error', err);
		} else {
			callback(req, res, next, objs);
		}
	});
};