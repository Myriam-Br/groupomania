const dbConnect = require('../database');

var Likes = function(likes){
    this.userID = likes.userID;
    this.publicationID = likes.publicationID;
    this.like_user = likes.like_user;
    this.dislike_user = likes.dislike_user;
}

module.exports = Likes;