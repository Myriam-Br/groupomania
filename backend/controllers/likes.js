const dbConnect = require('../database');
const Likes = require('../models/Likes');
//const User = require('../models/User');
//const Publication = require('../models/Publication');


exports.getAllLikes = (req, res) => {
    dbConnect.query('SELECT * FROM likes', (error, result) => {
        if(error) {
            res.json({
                status: false, 
                message: 'there are some error with query'})
        }else {
            res.json({
                status: true,
                data: result,
                message : 'likes list fetched successfully'})
        }     
    })
}

exports.getLikeByPublicationID = (req, res) => {
    let publicationID = req.params.publicationID;
    dbConnect.query('SELECT * FROM likes WHERE publicationID=? ', publicationID, (error, result) => {
        if(error) {
            res.json({
                status: false, 
                message: 'there are some error with query'})
        }else {
            res.json({
                status: true,
                data: result,
                message : 'likes by publicationID fetched successfully'})
        }   
    })
}

exports.getLikesTotal = (req, res) => {
   // console.log('RECUP ID PUBLICATION:', req.params.publicationID);
    let publicationID = req.params.publicationID;

    dbConnect.query('SELECT IFNULL (SUM(like_user), 0) total_likes FROM likes WHERE publicationID=?', publicationID, (error, result) => {
        if(error) {
            res.json({
                status: false, 
                message: 'there are some error with query'})
        }else {
            res.json({
                status: true,
                data: result,
                message : 'total likes fetched successfully'})

                //console.log(result);
        }    
    })
}


exports.likePublication =  (req, res) => {
   
    const like = new Likes({
        userID : req.body.userID,
        publicationID : req.body.publicationID,
        like_user : 1,
        dislike_user : 0,
    })
 
       dbConnect.query('INSERT INTO likes SET ?', like, (error, result) => {
        console.log(like);
        console.log('post liked');
        if(error) {
            res.json({
                status: false, 
                message: 'there are some error with query'})
        }else {
            res.json({
                status: true,
                data: result,
                message : 'like saved successfully'})

                //console.log(result);
        }    
        
    }) 
}





exports.deleteLikeDislike = (req, res) => {
    let publicationID = req.params.publicationID;
    //console.log(publicationID);
    dbConnect.query('DELETE FROM likes WHERE publicationID=?', publicationID, (error, result) => {
            if(error)
                res.send(err)
                res.json({
                    status:true,
                    message:"like|dislike deleted successfully"
                })
    })
}


