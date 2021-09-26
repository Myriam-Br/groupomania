const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const fileUpload = require('express-fileupload')
const store = new session.MemoryStore();
require('dotenv').config()
const helmet = require('helmet')

const SECRET = process.env.SESSION_SECRET_CODE;
app.use(session({
  secret: SECRET,
  cookie: {maxAge: 30000},
  saveUninitialized: false,
  resave: false,
  store
}));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(fileUpload());
app.use(helmet());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());



app.get('/', (req,res) => { 
  res.send('Hello world!');  
  console.log(store);
  console.log('session check: ',req.session);
});


//---------ROUTES DE MON APPLICATION-------//
//import user list
const userRoutes = require('./routes/user');
//import publication list
const publicationRoutes = require('./routes/publication');
//import comments list
const commentsRoutes = require('./routes/comments');
//import likes list
const likesRoutes = require('./routes/likes');



//create user routes
app.use('/api/users', userRoutes );
//create publication routes
app.use('/api/publication', publicationRoutes);
//create comments routes
app.use('/api/comments', commentsRoutes);
//create likes routes
app.use('/api/likes', likesRoutes);






module.exports = app;



