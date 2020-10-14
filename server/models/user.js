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
            days: []
        }]

});

schema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});
module.exports = mongoose.model("user", schema)