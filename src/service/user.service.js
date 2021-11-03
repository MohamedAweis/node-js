const logger = require('../config/logger');
const {userModel} = require('../model');

const isEmailExist = (email) => {
    if (userModel.isEmailExist(email)){
        return true;
    }

    return false;
}


const isIdExist = (id) => {
    if (userModel.isIdExist(id).length) {
        return true;
    } else {
        return false;
    }
}


const createuser = (user) => {

    logger.info ("creating user");

    let userCreate = userModel.create(user);


    return userCreate;
}


const updateUser = (id) => {
    let userUpdate = userModel.updateUser(id);
    return userUpdate;
}


const deleteUser = (id) => {
    logger.info('delete user');
    return userModel.deleteUser(id);
}




const getAllUsers = async () => {

    return userModel.getusers();
}


// const isEmailExist = (email) => {


// }


module.exports = {
    isEmailExist,
    isIdExist,
    createuser,
    getAllUsers,
    updateUser,
    deleteUser

}