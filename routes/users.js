var express = require('express');
var router = express.Router();
const db = require('../queries/queries')

/* GET home page. */

router.get('/', db.getUsers);

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });



module.exports = router;
