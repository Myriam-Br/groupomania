//exporter dans routes pour les post et création de post
const jwt = require('jsonwebtoken');
require('dotenv').config();

const MYTOKEN = process.env.TOKEN;
//verfication du token

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; //get the token in the header
    const decodedToken = jwt.verify(token, MYTOKEN); // compare to the secret token with jwt
    const userId = decodedToken.userID; //userId => new value (with the token added)
    if (parseInt(req.body.userID) && parseInt(req.body.userID) !== userId ){
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};