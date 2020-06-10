const db = require('./db_config');

db.serialize(function(){

    let sql = "SELECT * FROM favorite_songs WHERE title=?";
    songTitle = "Umbrella";

    db.get(sql, [songTitle], (err, row) => {
        if (err) throw err;

        if(row){
            // cetak isi row
            console.log(`[${row.id}] ${row.artist} - ${row.title}`);
        } else {
            console.log("Tidak ada data/hasil");
        }
    });

});

db.close();
