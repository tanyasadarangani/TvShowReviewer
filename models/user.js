
var mongoose = require('mongoose');

var listSchema = new mongoose.Schema({
  name: String,
  shows: []
});

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    lists: [listSchema],
    googleId: String
  }
);

module.exports = mongoose.model('User', userSchema);