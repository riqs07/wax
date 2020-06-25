var mysql = require('mysql');



const secret = 'wolvesCDQ49!'
// Connect to mySQL
let db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : secret,
  database : 'music_'
});

db.connect();

module.exports = db;