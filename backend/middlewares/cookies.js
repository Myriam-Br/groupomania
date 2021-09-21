
module.exports = (req, res, next) => {
    const { cookies } = req;
    if('session_id' in cookies) {
        console.log('session ID Exists');
        if(cookies.session_id === '123456'){
            next()
        } else {
            res.json({
                code: 403,
                message: 'Not Authentificated' 
            })
        }
    }else {
        res.json({
            code: 403,
            message: 'Not Authentificated' 
        })
    }
    console.log('cookiesValid:', cookies);
    next()
}