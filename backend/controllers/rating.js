const Rating = require('../models/Rating');

// get all ratings
exports.getAllRating = (req, res) => {

    Rating.getRatingList((err, ratings) => {
        if(err)
        res.send(err);
        console.log('Ratings', ratings);
        res.send(ratings);
    })
}

//crate new rating
exports.createNewRating = (req, res) => {
    const ratingReqData = new Rating(req.body);

    Rating.createRating(ratingReqData, (err, rating) => {
        if(err)
        res.send(err);
        res.send(rating)
    })
}

//delete rating
//delete publication
exports.deleteRating =(req, res) => {
    Publication.deleteRatingById(req.params.id, (err, publication) => {
        if(err)
        res.send(err);
        res.json({success: true, message: 'publication deteled successfully!', data: publication});
    })
}