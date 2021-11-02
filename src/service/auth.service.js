const logger = require('../config/logger');
const {userModel} = require('../model');
const {ApiError} = require('../payload/ApiError');


const login = (email, password) => {

    logger.info (`Authentication on email ${email} and password ${password}`);
    let user = userModel.getUserByEmailAndPassword(email, password);
    console.log(user);

    if(!user.length<1){
        return new ApiError(200,"Email or password does not match")

    }


    return user;
}

module.exports = {
    login
}