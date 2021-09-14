const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

//get all users
router.get('/', userCtrl.usersList)

//create new account
router.post('/register', userCtrl.register);

//login to account
router.post('/login', userCtrl.login);

//login to account
router.delete('/:id', userCtrl.deleteAccount);


module.exports = router;