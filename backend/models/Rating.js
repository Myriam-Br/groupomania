const dbConnect = require('../database');
//const User = require('../models/User');
//const Publication = require('../models/Publication');

var Rating = function(rating) {
    this.userID = rating.userID;
    this.publicationID = rating.publicationID;
    this.likes = rating.likes;
    this.comments = rating.comments;
    this.created_at = new Date()
}

//get all rating
Rating.getRatingList = (result) => {
    dbConnect.query('SELECT * FROM rating', (err, res) => {
        if(err){
        console.log('Error while fetching rating ...' , err);
        result (null, err)
        }else {
            console.log('Rating fetched successfully');
            result (null, res)
        }
    })
}

//create publication
Rating.createRating = (ratingReqData, result) => {
    dbConnect.query('INSERT INTO rating SET ?', ratingReqData, (err, res) => {
        if(err) {
            console.log('Error while inserting data ...', err);
            result(null, err)
        } else{
            console.log('Rating created succesfully !');
            result(null, res);
        }
    })
}

//delete publication
Rating.deleteRatingById =(req, res) => {
    dbConnect.query('DELETE FROM rating WHERE id=?', id, (err, res) => {
        if(err) {
            console.log('Error while deleting rating ...', err);
            result(null, err)
        } else{
            console.log('Rating deleted succesfully !');
            result(null, res);
        }
})
}

module.exports = Rating;
