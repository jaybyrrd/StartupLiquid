var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var userSchema = new Schema({
    email: String,
    delegation: {type : ObjectId, ref : 'user'},
    vote: Number,
    creationDate: Date
});

module.exports = mongoose.model('user', userSchema);