const jwt = require ('jsonwebtoken');

module.exports = {
    generateTokenForUser(userData) {
        return jwt.sign(
            { 
                userId: userData._id ,
                isAdmin: userData.isAdmin
            },
            'RANDOM_TOKEN_SECRET',
            { 
                expiresIn: '1h'
            } 
        )
    }
}
