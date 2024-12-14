var express = require('express');
var router = express.Router();
var async = require('async');
var creditTransfer = require('./creditTransfer');

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/:page', function(req, res, next) {
    res.render(req.params.page, {page: req.params.page});
});

router.use('/credits', creditTransfer);

module.exports = router;
