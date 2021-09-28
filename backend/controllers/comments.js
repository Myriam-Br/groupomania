const dbConnect = require('../database');
const Comments = require('../models/Comments');

exports.getComments = (req, res) => {

    dbConnect.query('SELECT * FROM comments ORDER BY created_at DESC', (error, result) => {
        if(error) {
            res.json({
                status: false, 
                message: 'there are some error with query'})
        }else {
            res.json({
                status: true,
                data: result,
                message : 'comments list fetched successfully'})
        }     
    })
}
exports.getCommentByPublication = (req, res) => {

    let publicationID = req.params.publicationID
    dbConnect.query('SELECT * FROM comments  WHERE publicationID=? ORDER BY created_at DESC', publicationID, (error, result) => {
        if(error) {
            res.json({
                status: false, 
                message: 'there are some error with query'})
        }else {
            res.json({
                status: true,
                data: result,
                message : 'comments list fetched successfully'})
        }     
    })
}


exports.createComment = (req, res) => {
    
    const comment = new Comments({
        userID : req.body.userID,
        publicationID :req.body.publicationID,
        comment_user : req.body.comment_user,
    });

    dbConnect.query('INSERT INTO comments SET ?', comment, (error, result) => {
        if(error){
            //send error msg
            res.json({
                status: false,
                message: 'there are some error with query',
            })
        } else {
            //show result
            res.json({
                status: true,
                data: result,
                message: 'comments saved successfuly'
            })
           // console.log(result);
        }
    })
}

exports.deleteComment = (req, res) => {
    const userID = parseInt(req.body.userID);

    dbConnect.query('SELECT * FROM publication WHERE id=? and userID=?', [req.params.id,userID], async(error, result) => {
         // si on trouve un resultat alors user connecté = autor donc on suppr le commentaire
        // sinon on teste si user connecté = admin :
        dbConnect.query('SELECT * FROM user WHERE id=? and isAdmin=1', [userID], async(error, result) => {
            dbConnect.query('DELETE FROM comments WHERE id=?', req.params.id, (error, result) =>{
                if(error)
                    res.send(err)
                    res.json({
                        status:true,
                        message:"Comment deleted succesfully",
                        data: result,
                    })
            })
        })
    })
   
}