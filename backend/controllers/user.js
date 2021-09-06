const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user')

exports.signup = async(req, res, next) => {


    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var bio = req.body.bio;   
    var hashedPw = await bcrypt.hash(req.body.password, 10);
        try{  
        const user = new User({
            email: email,
            username: username,
            password: hashedPw,
            bio: bio,
            isAdmin: 0
        });

        user.save() 
        return res.status(201).json({ 'userId': user.id})     
        }

        catch{
            (error => res.status(500).json({ error }));
        }

        next();
 
};

exports.login = async(req, res) => {
    var user =  User.findOne({ attributes: ['email'], where: {email: email}})
   
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
        const accessToken = jwt.sign(user,'RANDOM_TOKEN_SECRET', { expiresIn: '24h' });
        var bcryptCheck = await bcrypt.compare(req.body.password, user.password) 
        if(bcryptCheck) {
        res.status(200).json({
            userId: user.id,
            token : accessToken,
        });
        } else {
        res.send('Not Allowed')
        }
    } 
    catch {
        res.status(500).send()
    }       
    next();
};


 
    