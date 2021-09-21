const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const store = new session.MemoryStore();
//const passport = require('passport')
//const local = require('./strategies/local')
//const cookieParser = require('cookie-parser');

//app.use(cookieParser())
app.use(session({
  secret: 'some secret',
  cookie: {maxAge: 30000},
  saveUninitialized: false,
  resave: false,
  store
}))

//app.use(passport.initialize());
//app.use(passport.session());
app.use(express.json());
app.use(bodyParser.json());
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
});

//---------ROUTES DE MON APPLICATION-------//
//import user list
const userRoutes = require('./routes/user');
//import auth 
const authRoutes = require('./routes/auth');
//import publication list
const publicationRoutes = require('./routes/publication');
//import rating list
const commentsRoutes = require('./routes/comments');
//import rating list
const likesRoutes = require('./routes/likes');


//create user routes
app.use('/api/users', userRoutes );
//create user routes
app.use('/api/auth', authRoutes );
//create publication routes
app.use('/api/publication', publicationRoutes);
//create comments routes
app.use('/api/comments', commentsRoutes);
//create likes routes
app.use('/api/likes', likesRoutes);




module.exports = app;



