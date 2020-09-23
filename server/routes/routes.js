const express = require("express");
const router = express.Router();
const registerController = require('../controllers/register');
const loginController = require('../controllers/login');

router.get('/userlist', loginController.getAllUsers);
router.post('/login', loginController.login);
router.post('/register', registerController.register);

module.exports = router;