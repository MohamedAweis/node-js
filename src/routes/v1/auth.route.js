const express = require('express');
const router = express.Router();
const {authController} = require('../../controller');
const {authValidator} = require('../../../src/validations');
const validate = require('../../middlewares/validator');



router.post('/login',validate (authValidator.login), authController.login);
router.post('/register',validate (authValidator.register), authController.register);


// router.get('/login', function (req, res) {
     
//     authController.login(req, res);

// });


// router.get('/register', function (req, res) {
    
//     authController.register(req, res);

// });


module.exports = router;