var express = require('express');
var router = express.Router();
var comment = require('../models/comment');
    
    
router.get('/api/comments', function (req, res, next) {
  res.json([{"id":1,"author": "Nick","text":"Some text"}])
});

/* GET home page. */
router.get('/', function(req, res, next) {
  comment.find({}, function (err, doc) {
    console.log(arguments);
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
