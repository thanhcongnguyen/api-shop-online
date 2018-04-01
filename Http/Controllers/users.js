const express = require('express');
const router = express.Router();

const UserRepository = require('../../Repositories/User/UserRepository');

//get one user
router.get('/user/:id', function(req, res, next){
    let id = req.params.id;
    let findOne = UserRepository.findOne(id);
    res.send(findOne);
});

//get all users
router.get('/users', function(req, res, next){
    let findAll =  UserRepository.findAll();
    res.send(findAll);
});

//delete one user
router.delete('/delete/:id', function(req, res, next){
    let id = req.params.id;
    res.send(`delete user ${id}`);
});

//update one user
router.patch('/edit/:id', function(req, res, next){
    let id = req.params.id;
    res.send(`update user ${id}`);
});

//change password
router.patch('/changepassword', function(req, res, next){
    res.send('change_password');
})

module.exports = router;

