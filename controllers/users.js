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
    let showid = Number(req.params.showid);
    let review = req.user.reviews.filter(function(r){
        return r.showid === showid;
    });
    console.log('retrieveReview', showid, review);
    if(review.length)res.json(review[0]);
    else{res.json({})}
}

function updateReview(req, res) {
    let showid = Number(req.params.showid);
    let index = req.user.reviews.findIndex(function(r){
        return r.showid === showid;
    });
    console.log('req.body', req.body);
    let review = {
        showid: Number(req.body.showid), 
        comments: req.body.comments
    };
    if(index >= 0){
        req.user.reviews[index] = review;
    }
    else {
        req.user.reviews.push(review);
    }
    req.user.save(function(err){
        if(err)console.log('review update error', err);
        else{
            res.send('review updated');
        }
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
    let showid = Number(req.params.showid);
    req.user.reviews = req.user.reviews.filter(function(r) {
        return r.showid !== showid;
    });

    req.user.save(function(err){
        if(err)console.log('review update error', err);
        else{
            res.send('review deleted');
        }
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