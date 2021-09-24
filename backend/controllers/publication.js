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
    //var today = new Date()
    let imageUrl;
    let uploadPath;
  
    if(!req.files || Object.keys(req.files).length === 0){
       res.status(400).send('no file were uploaded')
    } else{
        
    }
  
    //name of the input is imageUrl
    imageUrl = req.files.imageUrl;
    uploadPath = __dirname + '/images/' + imageUrl.name;
    //console.log(sampleFile);
    console.log(req.files.imageUrl);
  
    const publication = new Publication({
        userID : 101,
        title : "some title",
        imageUrl : req.files.imageUrl,
        created_at : req.body.created_at,
    }); 
    
    //console.log(req);
   // console.log(publication.created_at);
   
   // console.log( 'img:',req.file);

    //use mv() 
    imageUrl.mv(uploadPath, function(err) {
        if(err) {
            return res.status(500).send(err);
        } else {
            res.send('File uploaded'); 
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

    })  

}

//update publication
exports.updatePublication = (req, res) => {
    var publications = new Publication(req.body);
    dbConnect.query('UPDATE publication SET userID=?,title=?,created_at=? WHERE id=?', req.params.id, publications, (error, result) => {
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