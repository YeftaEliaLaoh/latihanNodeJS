const db = require('./db_config');

db.serialize(function(){

    let sql = `DELETE FROM favorite_songs`;

    db.run(sql, (err) => {
        if (!err) console.log("All data deleted");
    });

});

db.close();
