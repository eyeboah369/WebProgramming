const User = require("../models/user");

exports.register = async (req, res) => {
    //TODO: put check to see if email address already exists
    let newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        uname: req.body.uname,
        email: req.body.email,
        password: req.body.password,
        exercises: [{
                exercise_name: null,
                reps: null,
                days: null 
            }]
        }
    )

    await newUser.save()
    console.log(newUser);
    res.send("User created!");
}