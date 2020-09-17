const express = require("express");
const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/userdb", {useNewUrlParser: true})
    .then(() => {
        const app = express();

        app.listen(5000, () => {
            console.log('server running on port 5000');
        })
})