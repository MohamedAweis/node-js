const joi = require('joi');

const login = joi.object({
    email: joi.string().required(),
    password: joi.string() 

});

const register = joi.object({
    email: joi.string(),
    password: joi.string(),
    age: joi.number().required().max(150).min(12),
    


});

module.exports = {
    login,
    register
}