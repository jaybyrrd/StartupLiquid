var user = require('../schemas/user.js');

exports.setDelegation = function(originEmail, targetEmail, callback)
{
    user.find({'email': targetEmail}, function(err, res) {
        if(err) callback(500, {'response': 'Internal error', 'res': false});
        if(res.length > 0 ) {
            user.update({'email': originEmail}, {$set: {'delegation': res[0]._id}}, function (err, result) {
                if(err) callback(500, {'response': 'Internal error', 'res': false});
                else {
                    callback(200, {'response': 'Ok', 'id': email, 'res': true});
                }
            });
        }
        else {
            callback(500, {'response': 'Internal error', 'res': false});
        }
    });
};

//    user.findByIdAndUpdate({'_id': result._id}, {$set: {'delegation': result._id}}, function (err, result);
