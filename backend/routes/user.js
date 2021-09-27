const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');


//get all users
router.get('/', userCtrl.usersList)

//get all users
router.get('/:id', userCtrl.usersById)



//create new account
router.post('/register', userCtrl.register);

//get users login
router.get('/login',  userCtrl.loginAuth)

//login to account
router.post('/login', userCtrl.login);

// logout user
router.post('/logout',  userCtrl.logout)

//login to account
router.delete('/:id', userCtrl.deleteAccount);


module.exports = router;