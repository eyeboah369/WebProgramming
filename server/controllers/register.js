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
                exercise_name: this.exercises.exercise_name,
                reps: this.exercises.reps,
                days: this.exercises.days 
            }]
        }
    )

    await newUser.save()
    console.log(newUser);
    res.send("User created!");
}