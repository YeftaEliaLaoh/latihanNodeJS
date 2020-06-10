const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017'
const dbName = 'game-of-thrones'
let db

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function() {
	  console.log('listening on 3000')
})

app.get('/', function(req, res) {
  //res.send('Hello World')
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
  console.log('Hellooooooooooooooooo!')
})


MongoClient.connect(url, {
  useUnifiedTopology: true, useNewUrlParser: true 
}, (err, client) => {
  if (err) return console.error(err)
  //console.log('Connected to Database')
  db = client.db(dbName)
  console.log(`Connected MongoDB: ${url}`)
  console.log(`Database: ${dbName}`)
})

