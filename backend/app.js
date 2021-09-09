const express = require('express');
const app = express();
const bodyParser = require('body-parser');
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
  console.log('MySql connected');
});

app.use(express.json());

// create the connection to database


/*app.use('/user', (req, res, next) => {
  res.status(200).send('hi');
  next();
});*/


app.post('/user', (req,res) => {
  var sql = "INSERT INTO user(username, email, password, bio, imageUrl, isAdmin) VALUES ?";
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var bio = req.body.bio;
  var imageUrl = req.body.imageUrl;
  var isAdmin = req.body.isAdmin;

  var values = [
    [
      username,
      email , 
      password,
      bio,
      imageUrl,
      isAdmin
    ],
  ]
  dbConnect.query(sql, [values], (err, result) => {
    if (err) {
      throw err
    };
    console.log("Number of records inserted: " + result.affectedRows);
    console.log('newuser');
    res.send(result)  
  });
});
  
 

app.get('/user', (req, res) => {
  dbConnect.query("SELECT * FROM user", (err, result) => {
    if (err) {
      throw err
    };  
    console.log("Find in db: " , result); 
    res.send(result)
  }); 
  
});








module.exports = app;



