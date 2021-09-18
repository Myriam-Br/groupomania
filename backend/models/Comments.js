const dbConnect = require('../database');

var Comments = function(comments) {
    this.userID = comments.userID;
    this.publicationID = comments.publicationID;
    this.comment = comments.comment_user;
    this.created_at = new Date()
}


module.exports = Comments;
