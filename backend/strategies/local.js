const LocalStrategy = require('passport-local')
const passport = require('passport')
const dbConnect = require('../database')

passport.use(new LocalStrategy(
    async(email, password, done) => {
        var email = req.body.email;
        await dbConnect.query('SELECT * FROM user WHERE email=?', email, (error, result) => {
            if(error){
                result.json({
                    message:'something went wrong'
                })
            }else{
                res.json({
                    message:"it worked",
                    data: result,
                })
            }
           
        });
        
    }
))