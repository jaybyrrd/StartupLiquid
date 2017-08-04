var user = require('../schemas/user.js');

exports.setVote = function(email, vote, callback)
{
    user.update({'email': email}, {$set: {'vote': vote}}, function (err, res) {
        if(err) callback(500, {'response': 'Internal error', 'res': false});
        else {
            callback(200, {'response': 'Ok', 'id': email, 'res': true});
        }
    });
};

//    user.findByIdAndUpdate({'_id': result._id}, {$set: {'delegation': result._id}}, function (err, result);
