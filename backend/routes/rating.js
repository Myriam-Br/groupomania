const express = require('express');
const router = express.Router();
const ratingCtrl = require('../controllers/rating');

//get poublication list
router.get('/', ratingCtrl.getAllRating);
//create new poublication 
router.post('/', ratingCtrl.createNewRating);
//delete rating
router.delete('/:id', ratingCtrl.deleteRating)


module.exports = router;