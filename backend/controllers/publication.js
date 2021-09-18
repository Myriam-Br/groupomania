const dbConnect = require('../database');
const Publication = require('../models/Publication');
//const multer = require('../middlewares/multer_config')

//imageUrl:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
//publication list
exports.publicationsList = (req, res) => {
    dbConnect.query('SELECT * FROM publication', (error, result) => {
        if(error) {
            res.json({
                status: false, 
                message: 'there are some error with query'})
        }else {
            res.json({
                status: true,
                data: result,
                message : 'publication list fetched successfully'})
        }     
    })
}

//publication by id
exports.publicationsById = (req, res) => {
    dbConnect.query('SELECT * FROM publication WHERE id=?', req.params.id, (error, result) => {
        if(error) {
            res.json({
                status: false, 
                message: 'there are some error with query'})
        }else {
            res.json({
                status: true,
                data: result,
                message : 'publication fetched successfully'})
        }     
    })
}


//create publication
exports.createPublication = (req, res) => {

    const publication = new Publication(req.body); 

    //console.log('user', publication.userID);
  
    dbConnect.query('INSERT INTO publication SET ?', publication, (error, result) => {
        if(error) {
            res.json({
                status: false, 
                message: 'there are some error with query'})
        }else {
            res.json({
                status: true,
                data: result,
                message : 'publication created successfully'})
        }     
    })
   
}

//update publication
exports.updatePublication = (req, res) => {
    var publications = new Publication(req.body);
    dbConnect.query('UPDATE publication SET userID=?,title=?,imageUrl=?,created_at=? WHERE id=?', req.params.id, publications, (error, result) => {
        if(error) {
            res.json({
                status: false, 
                message: 'there are some error with query'})
        }else {
            res.json({
                status: true,
                data: result,
                message : 'publication updated successfully'})
        }    
    })
}


//delete publication
exports.deletePublication = (req, res) => {
    dbConnect.query('DELETE FROM publication WHERE id=?', req.params.id, (error, result) => {
        if(error)
            res.send(err)
            res.json({
                status:true,
                message:"Publication deleted succesfully"
            })
    })
}