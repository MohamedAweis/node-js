const express = require('express');
const router = express.Router();

const {userController} = require('../../controller');
const {userValidator} = require('../../../src/validations');
const validate = require('../../middlewares/validator');

router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUserById); // userid validation
router.post('/create',validate(userValidator.createUser),userController.createUser); // userobject validation
router.patch('/update',validate(userValidator.updateUser),userController.updateUser);
router.delete('/:delete',userController.deleteUser);


module.exports = router;