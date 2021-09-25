const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const auth = require('../middlewares/auth');
const authTest = require('../middlewares/authtest');

//get comments list
router.get('/',  commentsCtrl.getComments);

//get comments list
//router.get('/total_comments/:publicationID',  commentsCtrl.getTotalComment);

//get comments list
router.get('/:publicationID',  commentsCtrl.getCommentByPublication);

//create new comments
router.post('/', commentsCtrl.createComment);

//create new comments
router.delete('/:id', commentsCtrl.deleteComment);




module.exports = router;