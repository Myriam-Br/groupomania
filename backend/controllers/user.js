const dbConnect = require('../database');
const User = require('../models/User');
const bcrypt = require('bcrypt')


exports.usersList = (req, res) => {
    dbConnect.query('SELECT * FROM user', (error, result) => {
        if(error) {
            res.json({
                status: false, 
                message: 'there are some error with query'})
        }else {
            res.json({
                status: true,
                data: result,
                message : 'user list fetched successfully'})
        }     
    })
}


exports.register = (req, res) => {
    //var today = new Date();
    const pwdRe =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    //if(users.password.match(pwdRe))
        //var hashedPwd = bcrypt.hash(users.password, 10);
        var users = new User({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
            bio : req.body.bio,
            isAdmin : req.body.isAdmin,
        });    

        if(users.password.match(pwdRe)){
            //users.password = bcrypt.hash(users.password, 10);
            console.log('pwd available');
            dbConnect.query('INSERT INTO user SET ?', users, (error, result) =>{
                if(error) {
                    res.json({
                        status: false, 
                        message: 'there are some error with query'})
                }else {
                        res.json({
                            status: true,
                            data: result,
                            message : 'account created successfully'}) 
                           // console.log(result);       
                }          
            })
        } else{
            console.log('pwd too short');
            res.status(400).json({
                message: 'pwd too short...'
            })
        }
       
        
} 

exports.login = (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    dbConnect.query('SELECT * FROM user WHERE email=?', email, (error, result) => {
        if (error) {
            res.json({
              status:false,
              message:'there are some error with query'
              })
        }else{
            if(result.length > 0){
                if(password==result[0].password){
                    res.json({
                        status:true,
                        message:'successfully authenticated'
                    })
                }else{
                    res.json({
                        status:false,
                        message:"Email and password does not match"
                    });
                }           
            }
          else{
            res.json({
                status:false,    
                message:"Email does not exits"
            });
          }
        }        
    })
}

exports.deleteAccount = (req, res) => {
    dbConnect.query('DELETE FROM user WHERE id=?', req.params.id, (error, resultat) => {
        if(error)
        res.send(err)
        res.json({
            status:true,
            message:"Account deleted successfully"
        });
    })
}