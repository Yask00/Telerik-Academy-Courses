var express = require('express');
var app = express();

// for POST
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var port = process.env.PORT || 8080;

//routes will go here
app.get('/api/users', (req, res) => {
    var user_id = req.param('id');
    var token = req.param('token');
    var geo = req.param('geo');

    res.send(user_id + ' ' + token + ' ' + geo);
    // http://localhost:8080/api/users?id=4&token=sdfa3&geo=us
});

// Route Parameter MIddleware -->
// This can be used for validations (like checking if a user exists) 
// or grabbing important information about that user or item.
app.param('name', function  (req, res, next, name) {
    // check if the user with that name exists
    // do some validations
    // add -dude to the name
    var modified = name + '-dude';
    // save name to the request
    req.name = modified;

    next();
})

// http://localhost:8080/api/users/chris
app.get('/api/users/:name', function(req, res) {
    // the user was found and is available in req.user
    res.send('What is up ' + req.name + '!');
});

// POST PARAMETERS
// To get POST parameters, we'll need two the ExpressJS 
// body-parser package.

// POST http://localhost:8080/api/users
// parameters sent with  POSTMAN
app.post('/api/users', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;

    res.send(user_id + ' ' + token + ' ' + geo);
});

//start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);