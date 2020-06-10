const db = require('./db_config');

db.serialize(function(){

    let sql = `UPDATE favorite_songs 
        SET title="Don't Matter"
        WHERE id=?`;

    let songId = '43';

    db.run(sql, [songId], (err) => {
        if (!err) console.log("1 record updated");
    });

});

db.close();
