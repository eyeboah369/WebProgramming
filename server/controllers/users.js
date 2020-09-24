const express = require("express");
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require("../models/user");

//query all the users from the db to view 
router.get('/userlist', async (req, res) => {
    const users = await User.find();
    console.log(users);
    res.send(users);
})

module.exports = {
    authenticate: function (req, res){
        User.findOne({email: req.body.email}, function (error, info){
            if(error){
                res.send("Email or password incorrect");
            }
            else {
                if(bcrypt.compareSync(req.body.password, info.password)) {
                    const token = jwt.sign({id:info._id}, req.app.get('key'), {expiresIn: '1h'});
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
    },

    
}