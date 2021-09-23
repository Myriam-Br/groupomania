const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');


//get all users
router.get('/', userCtrl.usersList)

//get all users
router.get('/', userCtrl.usersList)

//get users login
router.get('/login',  userCtrl.loginAuth)

//get users login
router.get('/logout',  userCtrl.logout)

//create new account
router.post('/register', userCtrl.register);

//create new account
//router.put('/:id', userCtrl.updateAccount);

//login to account
router.post('/login', userCtrl.login);

//login to account
router.delete('/:id', userCtrl.deleteAccount);


module.exports = router;