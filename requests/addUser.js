var user = require('../schemas/user.js');

exports.addUser = function(email, callback)
{
    if (email !== undefined && email.length)
    {
        user.find({'email': email}, function(err, peoples)
        {
            if (peoples.length !== 0) {
                callback(200, {'response': 'Ok', 'id': email, 'res': true});
            } else {
                var newUser = user({
                    'email': email,
                    'creationDate': new Date()
                });
                newUser.save(function (err, result) {
                    if (result) {
                        user.findByIdAndUpdate({'_id': result._id}, {$set: {'delegation': result._id, 'vote': -1}}, function (err, result) {
                            if (err) {
                                callback(500, {'response': 'Internal error', 'res': false});
                            }
                            else {
                                callback(200, {'response': 'Ok', 'id': email, 'res': true});
                            }
                        });
                    }
                    else
                        callback(500, {'response': 'Internal error', 'res': false});
                });

            }
        });
    }
    else
        callback(206, {'response':"Missing parameters",'res':false});
};