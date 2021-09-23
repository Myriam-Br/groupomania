const express = require('express');
const router = express.Router();
const likesCtrl = require('../controllers/likes');
const auth = require('../middlewares/auth');


router.get('/', likesCtrl.getAllLikes);

router.get('/:publicationID', likesCtrl.getLikeByPublicationID);

router.get('/total_likes/:publicationID', likesCtrl.getLikesTotal);

router.get('/total_dislikes/:publicationID', likesCtrl.getDislikesTotal);


router.post('/', likesCtrl.likePublication)

//router.post('/like/:publicationID', likesCtrl.sendLike)

//router.post('/dislike/:publicationID', likesCtrl.sendDislike)

router.delete('/:publicationID', likesCtrl.deleteLikeDislike);

module.exports = router;