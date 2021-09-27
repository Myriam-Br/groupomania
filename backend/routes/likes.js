const express = require('express');
const router = express.Router();
const likesCtrl = require('../controllers/likes');
const auth = require('../middlewares/auth');


router.get('/', likesCtrl.getAllLikes);

router.get('/:publicationID', likesCtrl.getLikeByPublicationID);

router.get('/total_likes/:publicationID', likesCtrl.getLikesTotal);

router.post('/', auth,  likesCtrl.likePublication)

router.delete('/:publicationID', auth,  likesCtrl.deleteLikeDislike);

module.exports = router;