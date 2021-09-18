const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

//import user list
const userRoutes = require('./routes/user');
//import publication list
const publicationRoutes = require('./routes/publication');
//import rating list
const commentsRoutes = require('./routes/comments');
//import rating list
const likesRoutes = require('./routes/likes');


app.get('/', (req,res) => {
  res.send('Hello world');
});


//create user routes
app.use('/api/users', userRoutes );

//create publication routes
app.use('/api/publication', publicationRoutes);

//create comments routes
app.use('/api/comments', commentsRoutes);

//create likes routes
app.use('/api/likes', likesRoutes);




module.exports = app;



