const dbConnect = require('../database');

var Publication = function(publication) {
    this.userID = publication.userID;
    this.title = publication.title;
    this.imageUrl = publication.imageUrl;
    this.created_at = publication.created_at;
}


module.exports = Publication;