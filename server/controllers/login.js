const User = require("../models/user");

exports.login = async (req, res) => {
     const user = await User.findOne({email : req.body.email, password: req.body.password});
     
    if(user){
        console.log(user);
        res.send("logged in");
    }
    else{
        console.log(user);
        res.send("incorrect username or password input")
    }
        
    }
