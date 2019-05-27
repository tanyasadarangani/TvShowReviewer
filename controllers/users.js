const Student = require('../models/user');

module.exports = {
  index,
  addList,
  delList,
  updateList
};

function index(req, res, next) {
    console.log('req', req);
  User.find({}, function(err, user) {
    if (err) return next(err);
    res.render('index', {
      user,
      name: req.query.name,
    });
  });
}

function addList(req, res, next) {
  req.user.lists.push(req.body);
  req.user.save(function(err) {
    res.redirect('/users');
  });
}

function delList(req, res, next) {
  Student.findOne({'facts._id': req.params.id}, function(err, student) {
    student.facts.id(req.params.id).remove();
    student.save(function(err) {
      res.redirect('/users');
    });
  });
}

function updateList(req, res) {

}