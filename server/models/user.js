const mongoose = require("mongoose");

const schema = mongoose.Schema({
    fname: {
        firstname: String
        
    },
    lname: {
        lastname: String
    },
    uname: {
        username: String
    },
    email: {
        email: String
    },
    password: {
        password: String
    }
})

module.exports = mongoose.model("User", schema)