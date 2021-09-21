const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({
        code: 200,
        message: 'worked',
        data: req.body
    })
})


module.exports = router;