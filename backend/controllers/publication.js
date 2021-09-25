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
        imageUrl : req.body.imageUrl,
    }); 

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
    var user_id = req.body.userID;
    //var isAdmin = req.body.isAdmin;
    dbConnect.query('SELECT isAdmin, userID FROM user, publication WHERE userID=?', user_id, (error, result)=>{
        if (error) {
            console.log(error);
        }else {

            res.json({
                status: true,
                data: result,
                message : 'TEST'
              
            })
          console.log(result[0].isAdmin==1);
          if(result[0].isAdmin==1 || result[0].userID==req.body.userID){
              console.log('je fonctionne');

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
                 
          } else{
              console.log('ERROR');
          }

           
           
        }
    })

 



  
     

}