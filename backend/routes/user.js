const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');


//get all users
router.get('/', userCtrl.usersList)

//get all users
router.get('/:id', userCtrl.usersById)



//create new account
router.post('/register', userCtrl.register);

//create new account admin
router.post('/register/admin', userCtrl.registerAdmin);

//login to account
router.post('/login', userCtrl.login);

//get users login
router.get('/login',  userCtrl.loginAuth)

//get logout
router.get('/logout',  userCtrl.logout)

//login to account
router.delete('/:id', userCtrl.deleteAccount);


module.exports = router;