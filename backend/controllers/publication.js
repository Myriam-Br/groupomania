const Publication = require('../models/Publication');


// get all publications 
exports.getPublicationList = (req, res) => {

    Publication.getAllPublications((err, publications) => {
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
exports.updatePublicationById = (req, res) => {
    const publicationReqData = new Publication(req.body);
    Publication.updatePublication(req.params.id , publicationReqData, (err, publication) => {
        if(err)
        res.send(err);
        res.json({status: true, message: 'account updated succesfully ', data: publication});
    })        
}

//delete publication
exports.deletePublication = (req, res) => {
    Publication.deletePublicationById(req.params.id, (err, publication) => {
        if(err)
        res.send(err);
        res.json({success: true, message: 'publication deteled successfully!', data: publication});
    })
}