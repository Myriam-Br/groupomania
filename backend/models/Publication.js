const dbConnect = require('../database');

var Publication = function(publication) {
    this.userID = publication.userID;
    this.title = publication.title;
    this.imageUrl = publication.imageUrl;
    this.created_at = new Date();
}

//get all publication
Publication.getAllPublications = (result) => {
    dbConnect.query('SELECT * FROM publication', (err, res) => {
        if(err) {
            console.log('Error while fetching publication ...', err);
            result(null, err)
        } else{
            console.log('Publication fetched succesfully !');
            result(null, res);
        }
    })
}

//get publication by id
Publication.getPublicationByID = (id, result) => {
    dbConnect.query('SELECT * FROM publication WHERE id=?', id, (err, res) => {
        if(err) {
            console.log('Error while fetching publication by id ...', err);
            result(null, err)
        } else{
            console.log('Publication fetched succesfully !');
            result(null, res);
        }
    })
}


//create publication
Publication.createPublication = (publicationReqData, result) => {
        dbConnect.query('INSERT INTO publication SET ?', publicationReqData, (err, res) => {
            if(err) {
                console.log('Error while inserting data ...', err);
                result(null, err)
            } else{
                console.log('Publication created succesfully !');
                result(null, res);
            }
        })
}

//update publication
Publication.updatePublication = (id, publicationReqData, result) => {
    dbConnect.query('UPDATE publication SET userID=?, title=?, imageUrl=?, created_at=? WHERE id=? ', [publicationReqData.userID, publicationReqData.title, publicationReqData.imageUrl, publicationReqData.created_at, id] , (err, res) => {
        if(err) {
            console.log('Error while updating data ...', err);
            result(null, err)
        } else{
            console.log('Publication updated succesfully !');
            result(null, res);
        }
    })
}


//delete user
Publication.deletePublicationById = (id, result) => {
    dbConnect.query('DELETE FROM publication WHERE id=?', id, (err, res) => {
            if(err) {
                console.log('Error while deleting publication ...', err);
                result(null, err)
            } else{
                console.log('Publication deleted succesfully !');
                result(null, res);
            }
    })
}

module.exports = Publication;