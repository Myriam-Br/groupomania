const dbConnect = require('../database');

var ImagePublication = function(image_publication) {
    this.userID = image_publication.userID;
    this.imageUrl = image_publication.imageUrl;
}


module.exports = ImagePublication;