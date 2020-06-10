// Konfigurasi Database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');mongoose.Promise = global.Promise;

// koneksi Ke Database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully Sekarang Anda Terkonek Ke database");    
}).catch(err => {
    console.log('Error database Tidak Terkoneksi atau Tidak Ada');
    process.exit();
});
