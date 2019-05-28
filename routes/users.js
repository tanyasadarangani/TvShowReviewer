var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');

/* GET users listing. */
//login page/new user page 
router.get('/', userCtrl.index);
router.post('/update/:id', userCtrl.update);

// router.

module.exports = router;
