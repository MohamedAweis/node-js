const status = require('http-status');
const logger = require('../config/logger');
const authService = require('../service')

exports.login = (req, res) => {
    

    let email = req.body.email;
    let password = req.body.password;
    let loginResponse = authService.login(email,password);

    res.status(status.OK).send(new ApiResponse(loginResponse))


    
}



exports.register = (req, res) => {

    res.status(status.NOT_IMPLEMENTED)
    .send('registered')
}