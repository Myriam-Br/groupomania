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
    var publicationID = req.params.publicationID;
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
    var publicationID = req.params.publicationID;

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

exports.getDislikesTotal = (req, res) => {
    //console.log('RECUP ID PUBLICATION:', req.params.publicationID);
    var publicationID = req.params.publicationID;

    dbConnect.query('SELECT IFNULL (SUM(dislike_user), 0) total_dislikes FROM likes WHERE publicationID=?', publicationID, (error, result) => {
        if(error) {
            res.json({
                status: false, 
                message: 'there are some error with query'})
        }else {
            res.json({
                status: true,
                data: result,
                message : 'total likes fetched successfully'})
        }    
    })
}


exports.likePublication =  (req, res) => {
    console.log(likes);
    var likes = new Likes(req.body)
    //console.log(req.body);
   console.log(likes.dislike_user);
   console.log(likes.userID);
    console.log(!likes.userID);
    if(likes.like_user==1 && likes.dislike_user==0){
        console.log('post liked');
        dbConnect.query('INSERT INTO likes SET ?', likes, (error, result) => {
            if(error) {
                res.json({
                    status: false, 
                    message: 'there are some error with query'})
            }else {
                res.json({
                    status: true,
                    data: result,
                    message : 'like saved  successfully'})
            }  
        })

    }else if(likes.dislike_user==1 && likes.like_user==0){
        console.log('post disliked');
        dbConnect.query('INSERT INTO likes SET ?', likes, (error, result) => {
            if(error) {
                res.json({
                    status: false, 
                    message: 'there are some error with query'})
            }else {
                res.json({
                    status: true,
                    data: result,
                    message : 'dislike saved  successfully'})
            }  
        })
    }else if(likes.like_user==1 && likes.dislike_user==1) {
        dbConnect.query('DELETE FROM likes WHERE publicationID=?', publicationID, (error, result) => {
            if(error)
                res.send(err)
                res.json({
                    status:true,
                    message:"like|dislike deleted successfully"
                })
         })
    console.log("can't like and dislike the same publication");
    res.json({
        message:"can't like & dislike the same publication"
    })
    }else {
        console.log('something went wrong');
        res.json({
            message:"something went wrong"
        })
    }
}





exports.deleteLikeDislike = (req, res) => {
    var publicationID = req.params.publicationID;
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


