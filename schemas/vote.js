var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var userSchema = new Schema({
    user: {type : ObjectId, ref : 'user'},
    vote: Integer,
    creationDate: Date
});

module.exports = mongoose.model('user', userSchema);