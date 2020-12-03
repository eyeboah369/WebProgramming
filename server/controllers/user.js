const { reset } = require("nodemon");
require("dotenv").config();
const User = require("../models/user");
const config = require('../config/auth');

exports.getList = async (req, res) => {
    const list = await User.findOne({_id: "5fc92e70c4d7ba8ab66a0632"});
    console.log(list.exercises);
    /*list.exercises = ['pushups','curlups','jumping jacks','pullups','planks','leg up',
    'situps','benchpress','weights','squats','jumprope'] */

    //here is where the regular expression call would be executed to query the database based on user input
    //This is where the (req) aspect would store a char for every input into the text field
    //MongoDB allows for users to be able to make simple async request to the database to be able to find
    //the data that would match the body of the req using the RegExp() function
    console.log(list.exercises);
    res.send(list.likes);
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