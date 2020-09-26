const express = require("express");
const { reset } = require("nodemon");
const router = express.Router();
const User = require("../models/user");

async function getUser(req, res) {
        await User.findOne({uname: req.body.uname}, function(err, valid){
        if(err){
            reset.send("Could not find user");
        }
        else{
            res.json(valid);
        }
    });

}