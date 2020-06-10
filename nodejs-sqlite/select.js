const db = require('./db_config');

db.serialize(function(){

    let sql = "SELECT * FROM favorite_songs";
    db.all(sql, (err, rows) => {
        if (err) throw err;

        if(rows){
            // cetak isi rows
            rows.forEach(song => {
                console.log(`[${song.id}] ${song.artist} - ${song.title}`);
            });
        } else {
            console.log("tidak ada data/hasil");
        }
    });

});

db.close();
