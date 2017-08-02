//require express
var express = require('express');
var path = require('path');

//create router object
var router = express.Router();

// eport router
module.exports = router;

// route our homepage
router.get('/', function(req, res) {
  res.render('pages/index');

});
// route for about page
router.get('/about', function(req, res) {
  res.render('pages/about');

});
router.get('/contact', function(req, res) {
    res.render('pages/contact');
});

router.get('/blog', function(req, res) {
    res.render('pages/blog');
});

router.get('/pics', function(req, res) {
    res.render('pages/pictures');
});

router.post('/contact', function(req, res){

});
