const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// from mongodb driver
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({ extended: true })); //midlleware
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})

// 1) create collection through the app

// 2) 
app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
      if (err) {
        console.log(err);
      }

      console.log('saved to database');
      res.redirect('/');
    });
});


// Mongo LAB for cloud database
var db;

MongoClient.connect('mongodb://admin:admin@ds147072.mlab.com:47072/star-wars-demo', (err, database) => {
  if (err) {
    console.log(err);
  }

  db = database;

  app.listen(3000, function () {
    console.log('listening on 3000')
  });
});


// --------------------------------------------------------------------------

// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// // from mongodb driver
// const MongoClient = require('mongodb').MongoClient;
// 
// app.use(bodyParser.urlencoded({ extended: true })); //midlleware
// app.set('view engine', 'ejs');
// 
// 
// app.get('/', (req, res) => {
//   db.collection('quotes').find().toArray((err, result) => {
//     if (err) return console.log(err)
//     // renders index.ejs
//     res.render('index.ejs', {quotes: result})
//   })
// })
// 
// app.post('/quotes', (req, res) => {
//     db.collection('quotes').save(req.body, (err, result) => {
//       if (err) {
//         console.log(err);
//       }
// 
//       console.log('saved to database');
//       res.redirect('/');
//     });
// });
// 
// 
// // Mongo LAB for cloud database
// var db;
// 
// MongoClient.connect('mongodb://admin:admin@ds147072.mlab.com:47072/star-wars-demo', (err, database) => {
//   if (err) {
//     console.log(err);
//   }
// 
//   db = database;
// 
//   app.listen(3000, function () {
//     console.log('listening on 3000')
//   });
// });

