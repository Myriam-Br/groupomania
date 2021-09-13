const User = require('../models/User');


//get user list
exports.getUserList = (req, res) => {
    //console.log('here all users');

    User.getAllUsers((err, users) => {
        if(err)
        res.send(err);
        console.log('Users', users);
        res.send(users);
    })
}

//get user by id
exports.getUserById = (req, res) => {
    User.getUserByID(req.params.id, (err, user) => {
        if(err)
        res.send(err);
        console.log('Users', user);
        res.send(user);
    })
 
}

// create new employee
exports.createNewUser = (req, res) =>{
    const pwdRe =   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    const userReqData = new User(req.body);
    console.log(userReqData.password);

        if(userReqData.password.match(pwdRe)) {
            console.log('account data', userReqData);
            User.createUser(userReqData, (err, user) => {
                if(err)
                res.send(err);
                console.log('Users', user);
                res.send(user);
            })
        } else {
            res.status(400).send({message: 'password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character '})
        }
}

exports.updateUser = (req, res) => {
    const pwdRe =   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    const userReqData = new User(req.body);
    console.log(userReqData.password);

        if(userReqData.password.match(pwdRe)) {

            console.log('account data updated', userReqData);
            User.updateUserAcc(req.params.id , userReqData, (err, user) => {
                if(err)
                res.send(err);
                res.json({status: true, message: 'account updated succesfully ', data: user});
            })
        } else {
            res.status(400).send({message: 'password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character '})
        }
}

//delete user
exports.deleteUser =(req, res) => {
    User.deleteUserByID(req.params.id, (err, user) => {
        if(err)
        res.send(err);
        res.json({success: true, message: 'account deteled successfully!'});
    })
}