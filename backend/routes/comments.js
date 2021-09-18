const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

//get comments list
router.get('/', commentsCtrl.getComments);

//create new comments
router.post('/', commentsCtrl.createComment);




module.exports = router;