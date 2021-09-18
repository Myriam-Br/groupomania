const dbConnect = require('../database');

var Likes = function(likes){
    this.userID = likes.userID;
    this.publicationID = likes.publicationID;
    this.like_user = likes.like;
    this.dislike_user = likes.dislike;
}

module.exports = Likes;