const express = require("express");
const router = express.Router();
const User = require("../models/user")
const registerController = require('../controllers/register');
const loginController = require('../controllers/login');

router.get('/userlist:fname', async (req, res) => {
    const users = await User.findOne({fname: req.fname});
    console.log(users);
    res.send(users);
})

router.post('/login', loginController.login);
router.post('/register', registerController.register);

module.exports = router;