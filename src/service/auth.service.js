const logger = require('../config/logger');
const {userModel} = require('../model');
const {ApiError} = require('../payload/ApiError');


const login = (email, password) => {

    logger.info (`Authentication on email ${email} and password ${password}`);
    let user = userModel.getUserByEmailAndPassword(email, password);

    if(!user){
        return new ApiError("Email or password does not match")

    }


    return user;
}

module.exports = {
    login
}