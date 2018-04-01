'use strict'

const UserRepositoryInterFace = require('./UserRepositoryInterface');

class UserRepository extends UserRepositoryInterFace {
    constructor(){
        super();
    }
    
    static findOne(id){
        return id;
    }
    
    static findAll(){
        return [1,2,3,4,5,6,7,8,9];
    }
}

module.exports = UserRepository;