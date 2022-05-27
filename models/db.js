var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b5fb007648129a',
    password: 'feff71a5',
    database: 'heroku_be5f40939384bb1'
} );

// var db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'project'
// } );
db.connect(() => console.log('Da ket noi database !'));

db.on('error', function(err) {
    console.log(err.code);
  });
setInterval(function () {
    db.query('SELECT 1');
}, 5000);
module.exports = db; 