const dbConnect = require('../database');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()




exports.usersList = (req, res) => {
    dbConnect.query('SELECT * FROM user', (error, result) => {
        if(error) {
            res.json({
                status: false, 
                code: 400,
                message: 'there are some error with query'})
        }else {
            res.json({
                status: true,
                code: 200,
                data: result,
                message : 'user list fetched successfully'})
        }     
    })
}

exports.usersById = (req, res) => {
    var userID = req.params.id
    dbConnect.query('SELECT * FROM user WHERE id=?', userID, (error, result) => {
        if(error) {
            res.json({
                status: false, 
                code: 400,
                message: 'there are some error with query'})
        }else {
            res.json({
                status: true,
                code: 200,
                data: result,
                message : 'user list fetched successfully'})
        }     
    })
}


exports.register = async(req, res) => {
   // console.log(errors);
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;  
        //console.log('pwd field',password);
        const pwdRe =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        //const emailRe = /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/;
   

        if(password && username && email){
                if(password.match(pwdRe)) {
                    //console.log('pwd available');
                    const hashedPwd =  await bcrypt.hash(password, 10);
                    //console.log(hashedPwd);
                    var users = new User ({
                        username: req.body.username,
                        email: req.body.email,
                        password: hashedPwd,
                        isAdmin : req.body.isAdmin
                    })
                    dbConnect.query('INSERT INTO user SET ?', users, (error, result) => {
                        if(error) {
                            res.json({
                                status: false, 
                                code: 403,
                                message: 'there are some error with query'})
                        }else {
                                res.json({
                                    status: true,
                                    code: 201,
                                    data: result,
                                    message : 'account created successfully'})  
                        }      
                    })
                }else{
                    res.json({
                        status:false,
                        message: 'Password must contain 6 or more characters a digita lower-case letter an upper-case letter'
                    })
                }
   
        }else {
            res.json({
                status:false,
                message: 'Please fill all the fields'
            })
        }
} 

exports.registerAdmin = async(req, res)=> {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password; 
    const secret_password= process.env.PWD_SECRET_ADMIN;
    const secret_email= process.env.EMAIL_SECRET_ADMIN;
    const secret_username= process.env.USERNAME_SECRET_ADMIN;

    if(password && username && email){
        if(password==secret_password && email==secret_email && username==secret_username) {
            //console.log('pwd available');
            const hashedPwd =  await bcrypt.hash(password, 10);
            //console.log(hashedPwd);
            var users = new User ({
                username: req.body.username,
                email: req.body.email,
                password: hashedPwd,
                isAdmin : 1
            })
            dbConnect.query('SELECT username, email, password FROM user WHERE (isAdmin=1)<1', (error, result) => {
                dbConnect.query('INSERT  INTO user SET ?', users, (error, result) => {
                    if(error) {
                        res.json({
                            status: false, 
                            code: 403,
                            message: 'there is already an admin account'})
                    }else {
                            res.json({
                                status: true,
                                code: 201,
                                data: result,
                                message : 'account created successfully'})  
                    }      
                })  

            })}else{
            res.json({
                status:false,
                message: 'admin information incorrect'
            })
            location.reload()
        }
    }else {
        res.json({
            status:false,
            message: 'Please fill all the fields'
        })
        location.reload()
    }

}

//recup login method get
exports.loginAuth = (req, res) => {
    console.log(req.session);
    if(req.session.authentificated) {
        res.json({
            code:200,
            message: "Logged in successfully !",
            data: req.session,
        })
    } else {
        res.json({
            message: "Account not logged in!",
            data: req.session
        })
    }
   
}

exports.login = async(req, res) => {
    console.log('session userid: ',req.sessionID);
    var email = req.body.email;
    var password = req.body.password;

    try{
        dbConnect.query('SELECT * FROM user WHERE email=?', [email], async(error, result) => {
            if (error) {
                return  res.json({
                        status: false,
                        code: 400,
                        message: 'there are some error with query'
                        })
            }else{
                if(result.length > 0){
                    if(req.session.authentificated){
                        res.json(req.session)
                    } else{

                        const compPwd =  await  bcrypt.compare(password, result[0].password); 
                        //console.log('pwd to compare',result[0].password);
                        //console.log('pwd compare',compPwd);
                        if(compPwd){
                            const MYTOKEN = process.env.TOKEN;
                            req.session.authentificated = true;
                            res.json({
                                status: true,
                                code: 200,
                                message: 'successfully authenticated',
                                data: req.session,
                                userID : result[0].id,
                                username : result[0].username,
                                token: jwt.sign (
                                    { userID: result[0].id},
                                    MYTOKEN,
                                    { expiresIn: '24h'}
                                )            
                            })
                           
                            
                        }else{
                            res.json({
                                status:false,
                                code:400,
                                message:"Email and password does not match"
                            });
                        }         
                    }
                     
                }else{
                res.json({
                    status:false,   
                    message:"Email does not exits"
                });
                }
            }        
        })
    }catch{
        error => res.send(error).status(500)
    }   
}


//destroy session
exports.logout = (req, res) =>{
    console.log('before loggout session: ',req.session);
   
       req.session.destroy(function(err){
        if(err){
           console.log(err);
        }else{
            res.json({
                message:' account logged out successfully'
            })  
            res.end('end');
           // res.redirect('/');
            console.log('after loggout session: ',req.session);
        }

     });
}
    



exports.deleteAccount = (req, res) => {
    dbConnect.query('DELETE FROM user WHERE id=?', req.params.id, (error, result) => {
        if(error)
        res.send(err)
        res.json({
            status:true,
            message:"Account deleted successfully"
        });
    })
}