const logger = require('../config/logger');
const {usermodel} = require('../model');

const isEmailExist = (email) => {
    if (usermodel.isEmailExist(email)){
        return true;
    }

    return false;
}


const isIdExist = (id) => {
    if (usermodel.isIdExist(id).length) {
        return true;
    } else {
        return false;
    }
}


const createuser = (user) => {

    logger.info ("creating user");

    let userCreate = usermodel.create(user);


    return userCreate;
}


const updateUser = (id) => {
    let userUpdate = usermodel.updateUser(id);
    return userUpdate;
}


const deleteUser = (id) => {
    logger.info('delete user');
    return usermodel.deleteUser(id);
}




const getAllUsers = () => {

    return usermodel.getusers();
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