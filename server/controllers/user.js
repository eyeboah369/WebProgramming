const { reset } = require("nodemon");
require("dotenv").config();
const User = require("../models/user");
const config = require('../config/auth');

exports.getUserInfo = async (req, res) => {
    console.log(req.body.password);
    await res.json(req.body);
}

exports.getProfile = async (req, res) => {
    const profile = await User.findOne({email: req.body.email});
    console.log(profile);
    res.send(profile);
}

exports.addExercise = async (req, res) => {
    console.log(req.body);
    const user = await User.findOne({email: req.body.email});
    const exercise = {
        "type": req.body.type, 
        "reps": req.body.reps, 
        "completed": req.body.completed
    };
    console.log(user);
    user.update(
         {
             $push: {exercises: exercise}
         }
    );
    console.log(user.log.exercises);
    res.send(user);

}