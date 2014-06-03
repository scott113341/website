var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Meowwwwww');
});

router.get('/trash', function(req, res) {
  res.render('index.html');
});


module.exports = router;
