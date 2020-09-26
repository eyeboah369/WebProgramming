const express = require("express");
const router = express.Router();
const registerController = require('../controllers/register');
const loginController = require('../controllers/login');
const userController = require('../controllers/user');
const auth = require('../config/auth')

router.get('/userlist', loginController.getAllUsers);
router.post('/login', loginController.login);
router.post('/register', registerController.register);
router.get('/home',  auth, userController.getUserInfo);

module.exports = router;
