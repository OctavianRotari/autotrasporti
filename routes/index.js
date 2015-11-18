var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');


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

router.post('/send_mail', function(req, res){
  var mailOpts , smtpTrans;

  smtpTrans = nodemailer.createTransport('SMTP', {
    service: 'Gmail',
    auth: {
      user: 'octotestmail@gmail.com',
      pass: process.env.PASS
    }
  });

  mailOpts = {
    from: req.body.nome + " " + req.body.email,
    to: 'octavianrotari@gmail.com',
    subject: 'contact form sito Autotrasporti',
    text: req.body.testo
  };


  smtpTrans.sendMail (mailOpts, function(error, message){
    if (error) {
      console.log(error);
      res.render('contatti', { title: 'Error', msg: "error", err: true, page: 'contatti'});
    }
    else {
      res.render('contatti', { title: 'successo', msg: "email spedita", err: false, page: "contatti"});
    }
  });
});

module.exports = router;
