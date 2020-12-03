const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
require("dotenv").config();

const schema = mongoose.Schema({
    fname: String,
    lname: String,
    uname: String,
    email: String,
    profile_pic: { data: Buffer, contentType: String },
    password: String,
    //can query current users exercises and other users exercises
    exercises: [{
        exercise_name: String,
        reps: Number,
        liked_exercise: Number,
        location: String,
        days: [],
        //daily time to for exercises to be collected and averaged for daily output comparison
        time: Number    
    }],
    //mapping occurence of exercise to count to find most done exercise and location
    //location may be irrelevant to the app overall however (may remove location)
    most_exercise: [{
        exercise_name: String,
        location: String,
        count_days: Number
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
    //can be used to average out which user liked the most 
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