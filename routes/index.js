var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/loginAction', function(req, res, next){

	console.log(req.body);
});

router.get('/register', function(req, res, next){

	res.render('register', { title: 'Register' });
});

router.get('/contact', function(req, res, next){

	res.render('contact', { title: 'Contact Us' });
});

module.exports = router;
