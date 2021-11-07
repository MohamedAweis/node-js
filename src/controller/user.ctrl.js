const status = require('http-status');
const logger = require('../config/logger');
const {handleAsync} = require('../utils/util')
const { ApiError } = require('../payload/ApiError');
const { ApiResponse } = require('../payload/ApiResponse');
const {userService} = require('../service');


const getAllUsers = handleAsync(async (req, res) =>{

   let users = await userService.getAllUsers();
   res.status(status.OK).send(new ApiResponse(status.OK, "ok", users));

});

const getUserById = (req, res) =>{

    res.status(status.NOT_IMPLEMENTED).send(new ApiError(status.NOT_IMPLEMENTED,"NOT_IMPLEMENTED"));

  
    
}

const createUser = (req, res) =>{


    logger.info('calling create user');


    let user = req.body;
    //console.log(user);

    if (userService.isEmailExist(user.email)){

        return res.status(status.NOT_ACCEPTABLE).send(new ApiError(status.NOT_ACCEPTABLE, "user already exist"));

    }

    let createUserStatus = userService.createuser(user);
    if (createUserStatus){
        return res.status(status.OK).send( new ApiResponse(status.OK, "user is created"));
        
    }


    return res.status(status.OK).send(new ApiResponse(status.OK, "something went wrong"));
    
}


//update user
const updateUser = (req, res) => {
    let user = req.body.id;
    if (userService.isIdExist(user)) {
        let userUpdated = userService.updateUser(req.body);
        res.status(status.OK).send({message: `User with the id: ${user} is updated`});
    }
    res.status(status.NOT_FOUND).send(status.NOT_FOUND,message= 'This user does not exist');
};



//delete user
const deleteUser = (req, res) => {
    let user = req.params.delete;
    if (userService.isIdExist(user)) {
        let userfilter = userService.deleteUser(user);
        return res.status(status.OK).send({message: `user with id: ${user} is deleted `});
    }
    return res.status(status.NOT_FOUND)
    .send(status.NOT_FOUND, message= "this user is not exist");
};



// const updateUser = (req, res) =>{

//     res
//     .status(status.NOT_IMPLEMENTED)
//     .send(
//         {message: "NOT_IMPLEMENTED"}
        
//      );
    
// }

module.exports = {

    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser

}