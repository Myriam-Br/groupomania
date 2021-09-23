const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
//const auth = require('../middlewares/auth')

//get comments list
router.get('/',  commentsCtrl.getComments);

//get comments list
router.get('/:publicationID',  commentsCtrl.getCommentByPublication);

//create new comments
router.post('/',  commentsCtrl.createComment);




module.exports = router;