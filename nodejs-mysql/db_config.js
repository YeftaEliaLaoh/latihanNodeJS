var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "nama_database"
});

module.exports = db;

