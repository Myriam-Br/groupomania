const express = require('express');
const router = express.Router();
const likesCtrl = require('../controllers/likes')


router.get('/', likesCtrl.getAllLikes);

router.get('/total_likes/:publicationID', likesCtrl.getLikesTotal);

router.get('/total_dislikes/:publicationID', likesCtrl.getDislikesTotal);

router.post('/', likesCtrl.likePublication);

router.delete('/:publicationID', likesCtrl.deleteLikeDislike);

module.exports = router;