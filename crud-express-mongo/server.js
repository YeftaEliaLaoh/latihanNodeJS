const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017'
const dbName = 'game-of-thrones'
let db

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))
app.listen(3000, function () {
	console.log('listening on 3000')
})

MongoClient.connect(url, {
	useUnifiedTopology: true,
	useNewUrlParser: true
}).then(client => {
	const db = client.db('star-wars-quotes')
	const quotesCollection = db.collection('quotes')

	app.post('/quotes', (req, res) => {
		quotesCollection.insertOne(req.body)
			.then(result => {
				res.redirect('/')
				console.log(result)
			}).catch(error => console.error(error))
	})

	app.get('/', function (req, res) {
		db.collection('quotes').find().toArray()
			.then(results => {
				res.render('index.ejs', {
					quotes: results
				})
				console.log(results)
				res.sendFile(__dirname + '/index.html')
			})
			.catch(error => console.error(error))

	})

	app.put('/quotes', (req, res) => {
		quotesCollection.findOneAndUpdate({
				name: 'Yoda'
			}, {
				$set: {
					name: req.body.name,
					quote: req.body.quote
				}
			}, {
				upsert: false
			})
			.then(result => {
				res.json('Success'), console.log(result)
			})
			.catch(error => console.error(error))
	})

	app.delete('/quotes', (req, res) => {
		quotesCollection.deleteOne({
				name: req.body.name
			})
			.then(result => {
				if (result.deletedCount === 0) {
					return res.json('No quote to delete')
				}
				res.json(`Deleted Darth Vadar's quote`)
			})
			.catch(error => console.error(error))
	})

})
