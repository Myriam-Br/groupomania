//exporter dans routes pour les post et création de post
const jwt = require('jsonwebtoken');
require('dotenv').config();

const MYTOKEN = process.env.TOKEN

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, MYTOKEN);
    const userId = decodedToken.userID;
    if (req.body.userID && req.body.userID !== userId) {
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