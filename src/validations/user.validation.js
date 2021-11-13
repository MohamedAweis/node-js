 const joi = require('joi');

 const createUser = joi.object({
    //  id: joi.string().required(),
     email: joi.string().required().email(),
     password: joi.string().required(),
     fullName: joi.string().required(),
     active: joi.number().required(),

 });


 const updateUser = joi.object({
    userId: joi.number().required(),
    password: joi.string().required(),
    fullName: joi.string().required(),
    active: joi.number().required(),

});



module.exports = {
    createUser,
    updateUser

}