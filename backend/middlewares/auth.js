//exporter dans routes pour les post et création de post
const jwt = require('jsonwebtoken');
require('dotenv').config();

const MYTOKEN = process.env.TOKEN

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; //get the token in the header
    console.log(req);
    const decodedToken = jwt.verify(token, MYTOKEN); // compare to the secret token with jwt
    const userId = decodedToken.userId; //userId => new value (with the token added)
    if (req.body.userId && req.body.userId !== userId ) {
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