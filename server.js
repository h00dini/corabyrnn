//import http module
//var http = require('http');
//handle sending requests and returning responses
//function handleRequest(req, res) {
  //return string
//  res.end('Hello World');
//}

//create the server
//var server = http.createServer(handleRequest);
//start server and listen on port
//server.listen(8080, function() {
//  console.log('Listening on 8080');
//});

//dependancies
var express = require('express');
var expressLayouts = require('express-ejs-layouts')
var app = express();
var port = 8080;

//use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

//route our app
var router = require('./app/routes');
app.use('/', router);

//set static files route (css, images)
app.use(express.static(__dirname + '/public'));

//start server
app.listen(port, function() {
  console.log('app started');
});
