const User = require("../models/user");

exports.updateLog = async (req, res) => {
    let new_exercise = {exercise_name: req.body.exercise_name, reps: req.body.reps, days: req.body.days};
    const profile = await User.findOneAndUpdate(
        {email: req.body.email},
        {$push: { exercises: new_exercise}},
        function(error, success){
            if(error){
                console.log(error);
            }
            else{
                console.log("This is success!: " + success);
            }
        });
    console.log(profile.exercises)
    res.send(profile);
}
