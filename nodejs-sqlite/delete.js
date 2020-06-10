const db = require('./db_config');

db.serialize(function(){

    let sql = `DELETE FROM favorite_songs WHERE id=?`;
    let songId = "59";

    db.run(sql, [songId], (err) => {
        if (!err) console.log("Data deleted");
    });

});

db.close();
