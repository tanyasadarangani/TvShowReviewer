var express = require('express');
var router = express.Router();

/* GET users listing. */
//login page/new user page 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//authenticate user 
router.post('/login', function(req, res) {
//if successful redirect to "/:userid"

//if failure redirect back to login page 

});

router.post('/signup', function(req, res) {
  //add user to database 

  //if form data complete, then create database user & redirect to "/:userid"

  //if form data incomplete, then redirect to "/"
});

router.get("/:userid", function(req, res) {
//logged in users homepage 

});

// router.

module.exports = router;
