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

exports.createComment = (req, res) => {
    
    var comment = new Comments(req.body);

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
                messgae: 'comments saved successfuly'
            })
        }
    })
}
