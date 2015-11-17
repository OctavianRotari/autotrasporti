var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res) {
  res.render('index', {});
});

router.get('/home', function(req, res) {
  res.render('index', {});
});

router.get('/about', function(req, res) {
  res.render('about', {});
});

router.get('/flotta', function(req, res) {
  res.render('flotta', {});
});

router.get('/contatti', function(req, res) {
  res.render('contatti', {});
});
module.exports = router;
