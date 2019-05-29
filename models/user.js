
var mongoose = require('mongoose');

var listSchema = new mongoose.Schema({
  name: String,
  shows: []
});

var reviewSchema = new mongoose.Schema({
  showid: Number,
  comments: String,
});

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    pic: String,
    reviews: [reviewSchema],
    lists: [listSchema],
    googleId: String
  }
);

module.exports = mongoose.model('User', userSchema);