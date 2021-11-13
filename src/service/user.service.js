const logger = require('../config/logger');
const {userModel} = require('../model');

const isEmailExist = (email) => {
    if (userModel.isEmailExist(email)){
        return true;
    }

    return false;
}


const isIdExist = async(userId) => {
    if (await userModel.isIdExist(userId)) {
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


const updateUser = async(userId) => {
    let userUpdate = await userModel.updateUser(userId);
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