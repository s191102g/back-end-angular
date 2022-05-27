var db = require("./db")

exports.list = ( callback)=> { 
    let sql = `SELECT *  FROM users`;
    db.query(sql, (err, d) => { callback(d); }  );
}

exports.listbyArea= (area, callback)=> {
    let sql = 'SELECT * FROM users WHERE user_area = "?"'    
    db.query(sql, area, (err, data) => {
        callback(data);
    });
}

exports.create = (data, callback ) => { 
    let sql = 'INSERT INTO users SET ?';
    db.query(sql, data, (err, d)=> { callback(d) }  );    
} 
exports.update = (id, data, callback)=> { 
    let sql = 'UPDATE users  SET ? WHERE id = ?';
    db.query(sql, [data, id], (err, d) => {
        if (err) throw err;
        callback();
    });    
} 
exports.delete = (id,data,callback)=>{
    let sql = 'DELETE FROM users WHERE id = ?'
    db.query(sql, id , (err, d) => {
        if (err) throw err;
        callback();
    });
}
exports.read= (id, callback)=> {
    let sql = 'SELECT * FROM users WHERE id = ?'    
    db.query(sql, id, (err, d) => {
        data = d[0]; 
        callback(data);
    });
}