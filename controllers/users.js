const User = require('../models/user');

module.exports = {
  index,
  update,
  retrieveReview,
  updateReview,
  createReview,
  deleteReview
};

function retrieveReview(req, res) {
    let showid = req.params.showid;
    let review = req.user.reviews.filter(function(r){
        return r.showid === showid;
    });
    if(review.length)res.json(review[0]);
    else{res.json({})}
}

function updateReview(req, res) {
    let showid = req.params.showid;
    let review = req.user.reviews.filter(function(r){
        return r.showid === showid;
    });
    if(review.length)review[0] = req.body;
    else {
        req.user.reviews.push(req.body);
    }
    req.user.save(function(err){
        if(err)console.log('review update error', err);
    });
}
function createReview(req, res) {
    let showid = req.params.showid;
    req.user.reviews.push(req.body);
    req.user.save(function(err){
        if(err)console.log('review update error', err);
    });
}
function deleteReview(req, res) {
    let showid = req.params.showid;
    req.user.reviews = req.user.reviews.filter(function(r) {
        return r.showid !== showid;
    });

    req.user.save(function(err){
        if(err)console.log('review update error', err);
    });
}

function index(req, res, next) {
    console.log('req.user', req.user);
    if (!req.user) {
    res.render('index', {user: null});
    }
    else {
        res.render('index', {
            user: req.user,
            name: req.query.name,
          });
    }
}
    

function update(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body,{new: true}, function(err, user) {
        if (err)
        console.log('update error',err);
        else{console.log('updatedUser', user);}
    });
}