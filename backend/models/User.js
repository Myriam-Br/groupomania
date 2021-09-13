const dbConnect = require('../database');

var User = function(user){
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.bio = user.bio;
    this.imageUrl = user.imageUrl;
    this.isAdmin = user.isAdmin ? user.isAdmin : 0 ;
}


//get all users
User.getAllUsers = (result) => {
    dbConnect.query('SELECT * FROM user', (err, res) => {
            if(err) {
                console.log('Error while fetching user ...', err);
                result(null, err)
            } else{
                console.log('Users fetched succesfully !');
                result(null, res);
            }
    })
}

//get all users
User.getUserByID = (id, result) => {
    dbConnect.query('SELECT * FROM user WHERE id=?', id, (err, res) => {
            if(err) {
                console.log('Error while fetching user by id...', err);
                result(null, err)
            } else{
                console.log('User fetched succesfully !');
                result(null, res);
            }
    })
}

//create user
User.createUser = (userReqData, result) => {
    dbConnect.query('INSERT INTO user SET ?', userReqData, (err, res) => {
        if(err) {
            console.log('Error while inserting data ...', err);
            result(null, err)
        } else{
            console.log('User created succesfully !');
            result(null, res);
        }
    })
}

//update account
User.updateUserAcc = (id, userReqData, result) => {
    dbConnect.query('UPDATE user SET username=?, email=?, password=?, bio=?, imageUrl=?, isAdmin=? WHERE id=? ', [userReqData.username, userReqData.email, userReqData.password, userReqData.bio, userReqData.imageUrl, userReqData.isAdmin, id] , (err, res) => {
        if(err) {
            console.log('Error while updating data ...', err);
            result(null, err)
        } else{
            console.log('Account updated succesfully !');
            result(null, res);
        }
    })
}

//delete user
User.deleteUserByID = (id, result) => {
    dbConnect.query('DELETE FROM user WHERE id=?', id, (err, res) => {
            if(err) {
                console.log('Error while deleting user by id...', err);
                result(null, err)
            } else{
                console.log('User deleted succesfully !');
                result(null, res);
            }
    })
}

module.exports = User