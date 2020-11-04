const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
require("dotenv").config();

const schema = mongoose.Schema({
    fname: String,
    lname: String,
    uname: String,
    email: String,
    password: String,
    exercises: [{
        exercise_name: String,
        reps: Number,
        liked_exercise: Number,
        days: []
    }],
    following: [{
        follow_name: String
    }],
    follower: [{
        follower_name: String,
        liked_exercise: [{
            exercise_name: String
        }]
    }],
    likes: [{
        user_name: String,
        exercise_name: String
    }]

});

schema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});
module.exports = mongoose.model("user", schema)