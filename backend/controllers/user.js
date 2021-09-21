const dbConnect = require('../database');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const {check, validationResult} = require('express-validator');



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


exports.register = async(req, res) => {

   
    console.log(errors);

        const email = req.body.email
        const username = req.body.username
        const password = req.body.password  
        console.log('pwd field',password);
        const pwdRe =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

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
                console.log('pwd too short');
                res.json({
                    code:403,
                    message: 'pwd too short...'
                })
            }

        }else {
            res.json({
                code: 403,
                message: 'Please fill all the fields'
            })
        }
      
        
   
} 

//recup login method get
exports.loginAuth = (req, res) => {
    res.cookie('session_id', '123456');
    res.json({
        code:200,
        message: "Logged In !"
    })

}

exports.login = async(req, res) => {
    console.log(req.sessionID);
    console.log(req.sessionID);
    var email = req.body.email;
    var password = req.body.password;
    console.log(password);
    console.log('params', req.params.isAdmin);


    try{
        dbConnect.query('SELECT * FROM user WHERE email=?', [email], async(error, result) => {
            if (error) {
                res.json({
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
                        console.log('pwd to compare',result[0].password);
                        console.log('pwd compare',compPwd);
                        if(compPwd){

                            const MYTOKEN = process.env.TOKEN;
                            req.session.authentificated = true;
                            req.session.user = {
                               email, password
                            };
                            res.json({
                                status: true,
                                code: 200,
                                message: 'successfully authenticated',
                                data: req.session,
                                token: jwt.sign (
                                    { userId: result[0].id},
                                    MYTOKEN,
                                    { expiresIn: '24h' }
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
   if(req.session){
       console.log(req.session);
    req.session.destroy((error)=>{
        if(error){
          console.log(error);
        } else{
            res.json({
                message:"something went wrong"
            })
        }
    });
   } else {
      console.log(session.email);
     
   }
    
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