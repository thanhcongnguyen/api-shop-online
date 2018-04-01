const express = require('express');
const router = express.Router();


//login
router.post('/login', function(req, res, next){
    res.send('LOGIN');
});


//register
router.post('/register', function(req, res, next){
    res.send('REGISTER');
});

//forget password
router.patch('/forgetpassword', function(req, res, next){
    res.send('Forget Password');
});

//logout
router.post('/logout', function(req, res, next){
    res.send('logout');
});





module.exports = router;