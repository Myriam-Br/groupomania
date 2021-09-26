const dbConnect = require('../database');
const Publication = require('../models/Publication');

//const multer = require('../middlewares/multer_config')

//imageUrl:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
//publication list
exports.publicationsList = (req, res) => {
    console.log('session check',req.session);
    console.log('headers check', req.headers);
    dbConnect.query('SELECT * FROM publication ORDER BY created_at DESC', (error, result) => {
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


    const publication = new Publication({
        userID : req.body.userID,
        title : req.body.title,
        imageUrl : req.files.imageUrl.name,
    }); 
    console.log(req.files.imageUrl.name);
    console.log(publication);
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


//delete publication
exports.deletePublication = (req, res) => {
    const userID = parseInt(req.body.userID);

    dbConnect.query('SELECT * FROM publication WHERE id=? and userID=?', [req.params.id,userID], async(error, result) => {
         // si on trouve un resultat alors user connecté = autor donc on suppr la publication
        // sinon on teste si user connecté = admin :
        dbConnect.query('SELECT * FROM user WHERE id=? and isAdmin=1', [userID], async(error, result) => {
            dbConnect.query('DELETE FROM publication WHERE id=?', req.params.id, (error, result) => {
                if(error){  
                    res.send(error)
                }else{
                    res.json({
                        status:true,
                        message:"Publication deleted succesfully",
                        data: result
                    })
                }        
            })
        })
    })
}
