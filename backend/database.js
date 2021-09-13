const mysql = require('mysql2');
const dbConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'testdb'
});
dbConnect.connect((err) => {
  if (err) {
    throw err
  };
  console.log('MySql connected successfully');
});
  
module.exports = dbConnect;
