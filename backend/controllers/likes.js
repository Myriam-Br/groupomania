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
    console.log('RECUP ID PUBLICATION:', req.params.publicationID);
    var publicationID = req.params.publicationID;

    dbConnect.query('SELECT SUM(like_user) total_likes FROM likes WHERE publicationID=?', publicationID, (error, result) => {
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

exports.getDislikesTotal = (req, res) => {
    console.log('RECUP ID PUBLICATION:', req.params.publicationID);
    var publicationID = req.params.publicationID;

    dbConnect.query('SELECT SUM(dislike_user) total_dislikes FROM likes WHERE publicationID=?', publicationID, (error, result) => {
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

/*
exports.sendLike = (req, res) => {
  
    var userLiked = {
        userID: req.body.userID,
        publicationID:req.params.publicationID,
        like_user: 1,
        dislike_user: 0,
    };
  
    dbConnect.query('INSERT INTO likes SET ?',  userLiked, (error, result) => {
        if(error) {
            res.json({
                status: false, 
                message: 'there are some error with query'})
        }else {
            res.json({
                status: true,
                data: result,
                message : 'like added to publication successfully'})
        }    
    })
}

exports.sendDislike = (req, res) => {
  
    var userDisliked = {
        userID: req.body.userID,
        publicationID:req.params.publicationID,
        like_user: 0,
        dislike_user: 1,
    };
  
    dbConnect.query('INSERT INTO likes SET ?',  userDisliked, (error, result) => {
        if(error) {
            res.json({
                status: false, 
                message: 'there are some error with query'})
        }else {
            res.json({
                status: true,
                data: result,
                message : 'dislike added to publication successfully'})
        }    
    })
}*/



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


