const User = require("../models/user");


exports.register = async (req, res) => {
    let newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        uname: req.body.uname,
        email: req.body.email,
        password: req.body.password
    })

    await newUser.save()
    console.log(newUser);
    res.send("User created!")
}