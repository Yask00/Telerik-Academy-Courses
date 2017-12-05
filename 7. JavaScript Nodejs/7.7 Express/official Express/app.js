const express = require('express');
const app = express();

app.set('view engine', 'pug');

//  ---------- ROUTNIG app.METHOD(PATH, HANDLER) ---------- 
app.get('/', function (req, res) {
    res.send('Hello there fxd');
});

// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})

// There is a special routing method, app.all(), which is not derived from any HTTP method. 
// This method is used for loading middleware functions at a path for all request methods.
app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})

// ----------  Serving static files in Express ---------- 
app.use(express.static('./public'));
// and serve them on 
// http://localhost:3000/images/kitten.jpg

// The app starts a server and listens on port 3000 for connections. 
app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});
// can be app.listen(3000)


// ---------- ROUTE PARAMETERS ---------- 

// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
var req = {
    params: { "userId": "34", "bookId": "8989" }
}

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})

// APP.route()
app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })


// USING PUG

app.get('/pug', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})