const express = require("express");
const router = express.Router();
const registerController = require('../controllers/register');
const loginController = require('../controllers/login');
const userController = require('../controllers/user');
const logController = require('../controllers/log');
const auth = require('../config/auth');

router.get('/userlist', loginController.getAllUsers);
//router.get('/home',  auth, userController.getUserInfo);
router.get('/profile', userController.getProfile);
router.post('/login', loginController.login);
router.post('/register', registerController.register);
router.post('/updateLog', logController.updateLog);
router.post('/updateExercise', auth, userController.addExercise);
//router.get('/friends');

module.exports = router;
