const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');



router.post('/register',[
    body('email').isEmail().withMessage('Invalid email format'),
    body('fullname.firstname').isLength({min: 3}).withMessage('Minimum length of 3 characters'),
    body('password').isLength({min: 6}).withMessage('Minimum length of 6 characters'),
],
    userController.registerUser
);




module.exports = router; 