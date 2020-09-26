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
        try{
            User.findOne({email: req.body.email}, function (error,info){
                if(!info){
                    res.status(200).json({
                        status: "error1",
                        message: "Email or password incorrect",
                        data: null
                    });
                }
                else {
                    if(bcrypt.compareSync(req.body.password, info.password)) {
                        const token = jwt.sign({id:info._id}, "" + process.env.JWT_KEY, {expiresIn: '1h'});
                        res.status(200).json({
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
                            status: "error2",
                            message: "Email or password incorrect",
                            data: null
                        });
                    }
                }
            });
        }
        catch(err){
            res.send("Caught error: " + err);
        }
    }
   
       
   
