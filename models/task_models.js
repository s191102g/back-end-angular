var db = require("./db")

exports.list = ( callback)=> { 
    let sql = `SELECT *  FROM tasks`;
    db.query(sql, (err, d) => { callback(d); }  );
}


exports.create = (data, callback ) => { 
    let sql = 'INSERT INTO tasks SET ?';
    db.query(sql, data, (err, d)=> { callback(d) }  );    
} 
exports.update = (id, data, callback)=> { 
    let sql = 'UPDATE tasks  SET ? WHERE id = ?';
    db.query(sql, [data, id], (err, d) => {
        if (err) throw err;
        callback();
    });    
} 
exports.delete = (id,callback)=>{
    let sql = 'DELETE FROM tasks WHERE id = ?'
    db.query(sql, id , (err, d) => {
        if (err) throw err;
        callback();
    });
}
exports.read= (id, callback)=> {
    let sql = 'SELECT * FROM tasks WHERE id = ?'    
    db.query(sql, id, (err, d) => {
        data = d[0]; 
        callback(data);
    });
}