//STEP 0 CREATE DATABASE

//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/w3s";
//
//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  console.log("Database created!");
//  db.close();
//});

//STEP 1 CREATE TABLE/COLLECTION

//var MongoClient = require('mongodb').MongoClient;
//
//var url = "mongodb://localhost:27017/w3s";
//
//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  db.createCollection('customers', function  (err, res) {
//      if (err) throw err;
//      console.log("Table created!");
//        db.close();
//  })
//});


//STEP 2 INSERT INTO

//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/w3s";
//
//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  var myobj = { name: "Company Inc", address: "Highway 37" };
//  db.collection("customers").insertOne(myobj, function(err, res) {
//    if (err) throw err;
//    console.log("1 record inserted");
//    db.close();
//  });
//});

//STEP 3  INSERT MANY

//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/w3s";
//
//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  var myobj = [
//    { name: 'John', address: 'Highway 71'},
//    { name: 'Peter', address: 'Lowstreet 4'},
//    { name: 'Amy', address: 'Apple st 652'},
//    { name: 'Hannah', address: 'Mountain 21'},
//    { name: 'Michael', address: 'Valley 345'},
//    { name: 'Sandy', address: 'Ocean blvd 2'},
//    { name: 'Betty', address: 'Green Grass 1'},
//    { name: 'Richard', address: 'Sky st 331'},
//    { name: 'Susan', address: 'One way 98'},
//    { name: 'Vicky', address: 'Yellow Garden 2'},
//    { name: 'Ben', address: 'Park Lane 38'},
//    { name: 'William', address: 'Central st 954'},
//    { name: 'Chuck', address: 'Main Road 989'},
//    { name: 'Viola', address: 'Sideway 1633'}
//  ];
//  db.collection("customers").insertMany(myobj, function(err, res) {
//    if (err) throw err;
//    console.log("Number of records inserted: " + res.insertedCount);
//    db.close();
//  });
//});


//STEP 4 FIND ONE

//var http = require('http');
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/w3s";
//
//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  db.collection("customers").findOne({}, function(err, result) {
//    if (err) throw err;
//    console.log(result.name);
//    db.close();
//  });
//});


//STEP 5  SELECT ALL

//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/w3s";
//
//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  db.collection("customers").find({}).toArray(function(err, result) {
//    if (err) throw err;
//    console.log(result);
//    console.log(result[2].address);
//    db.close();
//  });
//});


//STEP 6 QUERY

//var http = require('http');
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/w3s";
//
//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  var query = { address: "Park Lane 38" };
//  db.collection("customers").find(query).toArray(function(err, result) {
//    if (err) throw err;
//    console.log(result);
//    db.close();
//  });
//});


//STEP 7 REGEX

//var http = require('http');
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/w3s";
//
//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  var query = { address: /^S/ };
//  db.collection("customers").find(query).toArray(function(err, result) {
//    if (err) throw err;
//    console.log(result);
//    db.close();
//  });
//});

//STEP 8 DELETE

//var http = require('http');
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/w3s";
//
//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  var myquery = { address: 'Mountain 21' };
//  db.collection("customers").deleteOne(myquery, function(err, obj) {
//    if (err) throw err;
//    console.log("1 document deleted");
//    db.close();
//  });
//});

//STEP 9 DELETE MANY

//var http = require('http');
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/w3s";
//
//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  var myquery = { address: /^O/ };
//  db.collection("customers").deleteMany(myquery, function(err, obj) {
//    if (err) throw err;
//    console.log(obj.result.n + " document(s) deleted");
//    db.close();
//  });
//});


//STEP 10 DROP COLLECTION

//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/w3s";
//
//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  db.collection("customers").drop(function(err, delOK) {
//    if (err) throw err;
//    if (delOK) console.log("Table deleted");
//    db.close();
//  });
//});

//STEP 11 UPDATE

//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://127.0.0.1:27017/w3s";
//
//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  var myquery = { address: "Valley 345" };
//  var newvalues = { name: "Mickey", address: "Canyon 123" };
//  db.collection("customers").updateOne(myquery, newvalues, function(err, res) {
//    if (err) throw err;
//    console.log("1 record updated");
//    db.close();
//  });
//});