const status = require('http-status');
const logger = require('../config/logger');
const {authService} = require('../service')
const {ApiResponse} = require('../payload/ApiResponse')

const login = (req, res) => {
    

    let email = req.body.email;
    let password = req.body.password;
    let loginResponse = authService.login(email,password);

    res.status(status.OK).send(new ApiResponse(loginResponse))


    
}



const register = (req, res) => {

    res.status(status.NOT_IMPLEMENTED)
    .send('registered')
}


module.exports = {
    login,
    register
}