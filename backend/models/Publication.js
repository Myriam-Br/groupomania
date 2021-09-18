const dbConnect = require('../database');

var Publication = function(publication) {
    this.userID = publication.userID;
    this.title = publication.title;
    this.imageUrl = publication.imageUrl;
    this.created_at = new Date();
}


module.exports = Publication;