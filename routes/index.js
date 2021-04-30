var express = require('express');
var router = express.Router();
const db = require('../queries/queries')



router.get('/test', function(req, res, next) {
  res.send('test received!');
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res) {
  res.send('Got a POST request')
})


module.exports = router;
