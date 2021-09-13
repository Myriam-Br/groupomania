const Publication = require('../models/Publication');

// get all publications 
exports.getPublicationList = (req, res) => {

    Publication.getAllPublications((err, publications) => {
        console.log("we're here");
        if(err)
        res.send(err);
        console.log('Publication', publications);
        res.send(publications);

    })
}

// get publication by id
exports.getPublicationById = (req, res) => {

    Publication.getPublicationByID(req.params.id, (err, publications) => {
        console.log("we're here");
        if(err)
        res.send(err);
        console.log('Publication', publications);
        res.send(publications);

    })
}

//create new publication
exports.createNewPublication = (req, res) => {
    const publicationReqData = new Publication(req.body);

    Publication.createPublication(publicationReqData, (err, publication) => {
        if(err)
        res.send(err);
        res.send(publication)
    })
}

//delete publication
exports.deletePublication =(req, res) => {
    Publication.deletePublicationById(req.params.id, (err, user) => {
        if(err)
        res.send(err);
        res.json({success: true, message: 'publication deteled successfully!'});
    })
}