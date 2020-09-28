const User = require("../models/user");

exports.register = async (req, res) => {
    let newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        uname: req.body.uname,
        email: req.body.email,
        password: req.body.password,
        exercises: [{
                type: req.body.exercises.type,
                reps: req.body.exercises.reps,
                completed: req.body.exercises.completed
            }]
        }
    )

    await newUser.save()
    console.log(newUser);
    res.send("User created!");
}