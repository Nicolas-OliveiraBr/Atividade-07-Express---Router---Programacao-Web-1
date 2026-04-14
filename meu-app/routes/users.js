var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect('/users/signup');
});

router.get('/signin', function(req, res, next) {
  res.send(`<h1>Signin</h1>`);
})

router.get('/signup', function(req, res) {
  res.send('<h1>Signout</h1>');
})

router.get('/:id', function(req, res, next) {
  const userId = req.params.id
  res.send(`<p> Olá, seja bem vindo, ${userId} !</p>`);
});

module.exports = router;
