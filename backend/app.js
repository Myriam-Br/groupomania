const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
//import user list
const userRoutes = require('./routes/user');
//import publication list
const publicationRoutes = require('./routes/publication');

app.get('/', (req,res) => {
  res.send('Hello world');
});

//create user routes
app.use('/api/user', userRoutes);

//create publicayion routes
app.use('/api/publication', publicationRoutes);




module.exports = app;



