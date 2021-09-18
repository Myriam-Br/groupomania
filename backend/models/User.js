const dbConnect = require('../database');

var User = function(user){
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.isAdmin = user.isAdmin;
}


module.exports = User