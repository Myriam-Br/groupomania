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
}))

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


app.post('/', (req,res) => { 
  res.send('This is a post method');  
  let imageUrl;
  let uploadPath;

  if(!req.files || Object.keys(req.files).length === 0){
     res.status(400).send('no file were uploaded')
  }

  //name of the input is imageUrl
  imageUrl = req.files.imageUrl;
  uploadPath = __dirname + '/images/' + imageUrl.name;
  //console.log(sampleFile);
  console.log(req.files.imageUrl);

  //use mv() to pla
  imageUrl.mv(uploadPath, function(err) {
    if(err) return res.status(500).send(err);
    res.send('File uploaded');
  }) 


});

//---------ROUTES DE MON APPLICATION-------//
//import user list
const userRoutes = require('./routes/user');
//import auth 
const authRoutes = require('./routes/auth');
//import publication list
const publicationRoutes = require('./routes/publication');
//import comments list
const commentsRoutes = require('./routes/comments');
//import likes list
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



