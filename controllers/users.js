const User = require('../models/user');

module.exports = {
  index,
//   addList,
//   delList,
  update
};

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
    // User.find({_id: req.user.googleId} ,function(err, user) {
    //     if (err) {
    //         res.render('index', {user:null});
    //     }
    //     else {
    //         console.log('user', user);
    //         res.render('index', {
    //             user,
    //             name: req.query.name,
    //           });
    //     }
    // });
    }
}

// function addList(req, res, next) {
//   req.user.lists.push(req.body);
//   req.user.save(function(err) {
//     res.redirect('/users');
//   });
// }

// function delList(req, res, next) {
//   Student.findOne({'facts._id': req.params.id}, function(err, student) {
//     student.facts.id(req.params.id).remove();
//     student.save(function(err) {
//       res.redirect('/users');
//     });
//   });
// }

function update(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body,{new: true}, function(err, user) {
        if (err)
        console.log('update error',err);
        else{console.log('updatedUser', user);}
    });
}