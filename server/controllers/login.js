/*const User = require("../models/user");
const homeController = require('./home');

exports.login = async (req, res) => {
    const user = await User.findOne({
         email : req.body.email, 
         password: req.body.password
    });
     
    if(user){
        console.log(user);
        res.redirect(`/home?${user.fname}`, homeController.home);
    }

    else{
        console.log(user);
        res.send("incorrect username or password input");
    }
        
    }
    */
   require("dotenv").config();
   const express = require("express");
   const bcrypt = require('bcrypt'); 
   const jwt = require('jsonwebtoken');
   const router = express.Router();
   const User = require("../models/user");
   
   //query all the users from the db to view 
  exports.getAllUsers = async (req, res) => {
       const users = await User.find();
       console.log(users);
       res.send(users);
   }
   

    exports.login = function (req, res){
        User.findOne({email: req.body.email}, function (error, info){
            if(error){
                res.send("Email or password incorrect");
            }
            else {
                if(bcrypt.compareSync(req.body.password, info.password)) {
                    console.log(req.app.get("" + process.env.JWT_KEY));
                    const token = jwt.sign({id:info._id}, "" + process.env.JWT_KEY, {expiresIn: '1h'});
                    res.json({
                        status: "success",
                        message: "User authenticated",
                        data: {
                            user: info,
                            token: token
                        }
                    });
                }
                else{
                    res.json({
                        status: "error",
                        message: "Email or password incorrect",
                        data: null
                    })
                }
            }
        });
    }
   
       
   
