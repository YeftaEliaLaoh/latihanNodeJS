const express = require('express');
const bodyParser = require('body-parser');

// pembuatan App Express
const app = express();

// memparse reques content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// memparse reques of content-type - application/json
app.use(bodyParser.json())

// mendefinisikan router
app.get('/', (req, res) => {
    res.json({"message": "Selamat datang Di Web server nodejs dan mongoDB"});
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
