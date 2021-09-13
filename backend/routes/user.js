const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

//get user list
router.get('/', userCtrl.getUserList);

//get user by id
router.get('/:id', userCtrl.getUserById);

//create new user 
router.post('/', userCtrl.createNewUser);

//update user
router.put('/:id', userCtrl.updateUser)

//delete user 
router.delete('/:id', userCtrl.deleteUser);





module.exports = router;