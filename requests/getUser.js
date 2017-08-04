var user = require('../schemas/user.js');
var ObjectId = require('mongoose').Types.ObjectId;

exports.getGames = function(email, callback)
{
    if (email !== undefined && email.length)
    {
        user.find({'email': email}, function(err, people)
        {
            if(err) callback(500, { 'response': 'Internal error', 'res': false});

            if (people.length > 0)
                callback(200, { 'response': 'Ok', 'id': email, 'res': true});
            else
                callback(200, { 'response': 'Ok', 'id': email, 'res' : false});
            return;
        });
    }
    else
        callback(206, {'response':"Missing parameters",'res':false});
}