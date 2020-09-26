const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const salt = 10;

const schema = mongoose.Schema({
    fname: String,
    lname: String,
    uname: String,
    email: String,
    password: String,
    log: {
        exercise: [{
            type: String,
            reps: Number,
            completed: Boolean
        }]


    }
});

schema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, salt);
    next();
});
module.exports = mongoose.model("user", schema)