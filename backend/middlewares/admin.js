const jwt = require ('jsonwebtoken');

module.exports = {
    generateTokenForUser(userReqData) {
        return jwt.sign(
            { 
                userId: userReqData._id ,
                isAdmin: userReqData.isAdmin
            },
            'RANDOM_TOKEN_SECRET',
            { 
                expiresIn: '1h'
            } 
        )
    }
}
