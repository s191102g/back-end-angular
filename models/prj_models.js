var db = require("./db")

exports.list = ( callback)=> { 
    let sql = `SELECT *  FROM project_manager`;
    db.query(sql, (err, d) => { callback(d); }  );
}


exports.create = (data, callback ) => { 
    let sql = 'INSERT INTO project_manager SET ?';
    db.query(sql, data, (err, d)=> { callback(d) }  );    
} 


exports.update = (id, data, callback)=> { 
    let sql = 'UPDATE project_manager  SET ? WHERE id = ?';
    db.query(sql, [data, id], (err, d) => {
        if (err) throw err;
        callback();
    });    
} 
exports.delete = (id,data,callback)=>{
    let sql = 'DELETE FROM project_manager WHERE id = ?'
    db.query(sql, id , (err, d) => {
        if (err) throw err;
        callback();
    });
}
exports.read= (id, callback)=> {
    let sql = 'SELECT * FROM project_manager WHERE id = ?'    
    db.query(sql, id, (err, d) => {
        data = d[0]; 
        callback(data);
    });
}