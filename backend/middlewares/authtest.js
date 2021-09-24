const jwt = require('jsonwebtoken');
require('dotenv').config();

const MYTOKEN = process.env.TOKEN

exports.verifyToken = (req, res, next) => {
    console.log('je fonctionne');
  
    const token = req.headers['authorization']; //get the token in the header
    if(!token) return res.status(401).json('Unauthorize user')

    try {
        const decodedToken = jwt.verify(token, MYTOKEN); // compare to the secret token with jwt
        req.user = decodedToken; //userId => new value (with the token added)
        next()
    } catch {
    res.status(401).json({
      error: new Error('Token not valid!')
    });
  }
};