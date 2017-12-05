const express = require('express');
const app = express();

// MIDDLEWARE IN SEPARATE FILES
//var mw = require('./my-middleware.js')
//app.use(mw({ option1: '1', option2: '2' }))

//  ---------- Middleware function myLogger ---------- 
var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

//  ---------- Middleware function requestTime ---------- 
var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

// To load the middleware function, call app.use()
// every request to localhost:3000 will print
// !!! Before the route to the root
app.use(myLogger)
app.use(requestTime)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/first', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})

app.listen(3000)