const express = require('express');
const app     = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test';
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(url, (err, database) => {
  db = database;
})

app.get('/', (req, res) => {
    db.collection('quotes').find().toArray((err, result) => {
      res.render('index.ejs', {quotes:result});
    })
})
app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})
app.listen(3000);
// let remove = function(db, callback) {
//   db.collection('quotes').deleteMany({}, function(err, result) {
//     console.log("deleteMany");
//     callback();
//   })
// }
// MongoClient.connect(url, (err, db) => {
//   remove(db, function() {
//     console.log('Hello world');
//   });
// })
