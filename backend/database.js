const mysql = require('mysql2');
require('dotenv').config();
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const database = process.env.DB_DATABASE;
const password = process.env.DB_PASSWORD;


const dbConnect = mysql.createConnection({
    host: host,
    user: user,
    database: database,
    password: password
});
dbConnect.connect((err) => {
  if (err) {
    throw err
  };
  console.log('MySql connected successfully');
});
  
module.exports = dbConnect;
