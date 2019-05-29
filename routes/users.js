var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');

/* GET users listing. */
//login page/new user page 
router.get('/', userCtrl.index);
router.post('/update/:id', userCtrl.update);
router.get('/review/:showid', userCtrl.retrieveReview); 
router.post('/updatereview/:showid', userCtrl.updateReview);
router.post('/createreview/:showid', userCtrl.createReview);
router.post('/deletereview/:showid', userCtrl.deleteReview);


module.exports = router;
