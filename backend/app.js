const express = require('express');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

var posts = [
    {
    id: 1,
    title : 'my first post',
    imageUrl : 'imgUrl first post',
    comments : [],
    likes: 0,
    dislikes: 0,
    },
    {
    id: 2,
    title : 'my second post',
    imageUrl : 'imgUrl first post',
    comments : [],
    likes: 0,
    dislikes: 0,
    },
    {
    id: 3,
    title : 'my third post',
    imageUrl : 'imgUrl first post',
    comments : [],
    likes: 0,
    dislikes: 0,
    }
];

app.use('/', (req, res, next) => {
    console.log("test de l'init de l'API");
    next();
});

app.get('/api/posts/:id', (req, res, next) => {
    post = posts.find(x => x.id === req.params.id);
    if(!post)
    res.status(404).send('The post with the given id was not found');
    res.send(post);
    next();
});


app.get('/api/posts', (req, res) => {
    res.status(200);
    res.send(posts);
});


module.exports = app;