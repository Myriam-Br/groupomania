const dbConnect = require('../database');
const Comments = require('../models/Comments');

exports.getComments = (req, res) => {

    dbConnect.query('SELECT * FROM comments', (error, result) => {
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
    dbConnect.query('SELECT * FROM comments WHERE publicationID=?', publicationID, (error, result) => {
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
exports.getTotalComment = (req,res) => {
    var publicationID = req.params.publicationID
    console.log(publicationID);
 
    dbConnect.query('SELECT SUM(quantity) total_comments FROM comments WHERE publicationID=?', publicationID, (error, result) => {
        if(error) {
            res.json({
                status: false, 
                message: 'there are some error with query'})
        }else {
            res.json({
                status: true,
                data: result,
                message : 'total comments fetched successfully'})

                console.log(result);
        }    
    })

}

exports.createComment = (req, res) => {
    
    const comment = new Comments(req.body);

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
            console.log(result);
        }
    })
}
