var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var userSchema = new Schema({
    email: String,
    creationDate: Date
});

module.exports = mongoose.model('user', userSchema);