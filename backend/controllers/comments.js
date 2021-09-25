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

    var publicationID = req.params.publicationID
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
    dbConnect.query('DELETE FROM comments WHERE id=?', req.params.id, (error, result) =>{
        if(error)
            res.send(err)
            res.json({
                status:true,
                message:"Comment deleted succesfully"
            })
    })
}