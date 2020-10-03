const User = require("../models/user");

exports.register = async (req, res) => {
    let newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        uname: req.body.uname,
        email: req.body.email,
        password: req.body.password,
        exercises: [{
                type: req.body.log.exercises.type,
                reps: req.body.log.exercises.reps,
                completed: req.body.log.exercises.completed
            }]
        }
    )

    await newUser.save()
    console.log(newUser);
    res.send("User created!");
}