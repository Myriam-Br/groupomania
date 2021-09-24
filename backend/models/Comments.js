const dbConnect = require('../database');

var Comments = function(comments) {
    this.userID = comments.userID;
    this.publicationID = comments.publicationID;
    this.comment_user = comments.commentaire;
    this.created_at = comments.created_at
}


module.exports = Comments;
