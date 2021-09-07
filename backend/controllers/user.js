const bcrypt = require('bcrypt');
const jwtAdmin = require('../middlewares/admin');
const User = require('../models/user')

//routes
exports.register = (req, res, next) => {
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var bio = req.body.bio;

    console.log(req.body);

    //vérifier si paramètres existent
    if(email == undefined){
        return res.status(400).json({'error': 'missing parameters'})
    }

    //TODO: vérifier taille pseudo, regex,....

    User.findOne({
        attributes: ['email'],
        where: {email: email}
    })

    .then(function(userFound) {
        if(!userFound){
            var hashedPw = bcrypt.hash(req.body.password, 10);
            var user = new User({
                email: email,
                username: username,
                password: hashedPw,
                bio: bio,
                isAdmin: 0
            })

            .then(function(user) {
                return res.status(201).json({
                    'userId': user.id
                })
            })

            .catch(function(err) {
                return res.status(500).json({ 'error': 'cannot add user'})
            });


        } else {     
            return res.status(400).json({ 'error': 'user already exist'})
        }
        
    })
    .catch(function(err) {
        return res.status(500).json({ 'error': 'unable to verify user'})
    });


}

exports.login = (req, res, next) => {
    var email = req.body.email;
    var password = req.body.password;

    if(email == null || password == null){
        return res.status(400).json({ 'error': 'missing parameters'});
    }

    //TODO -> verifier username, regex pwd, ...

    User.findOne(
        { where: { email: email}
    })
    .then(userFound => {
        if(userFound) {
            bcrypt.compare(password, userFound.password)
            .then(valid => {
                if (!valid) {
                //si le mot de passe est incorrect
                return res.status(401).json({ error: 'invalid password !' }); //401 = accès non autorisé
                }
                res.status(200).json({
                    userId: user._id,
                    token: jwtAdmin.generateTokenForUser(userFound)
                });
            })
            .catch(error => res.status(500).json({ error }));   
        }else {
            return res.status(404).json({ 'error': "user doesn't exist"})
        }
    })
    .catch(err => {
        return res.status(500).json({ 'error': 'unable to verify user'})
    })



}

