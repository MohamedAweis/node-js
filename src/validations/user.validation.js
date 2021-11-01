 const joi = require('joi');

 const createUser = joi.object({
     id: joi.string().required(),
     firstName: joi.string().required(),
     middletName: joi.string().optional(),
     lastName: joi.string().required(),
     email: joi.string().required().email(),
     password: joi.string().required(),
     age: joi.string().required().min(1).max(120)

 });


 const updateUser = joi.object({
    id: joi.string().required(),
    firstName: joi.string().required(),
    middletName: joi.string().optional().empty(),
    lastName: joi.string().required(),
    age: joi.string().required().min(1).max(120)

});



module.exports = {
    createUser,
    updateUser

}