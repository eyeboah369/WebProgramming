const express = require("express");
const User = require("../models/user")
const router = express.Router();

router.get('/user', async (req, res) => {
    const users = await User.find();
    res.send(users);
})

router.post('/user', async (req, res) => {

    const user = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        uname: req.body.uname,
        email: req.body.email,
        password: req.body.password
    })

    await user.save();
    res.send(user);
})
module.exports = router;