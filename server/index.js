require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes")

mongoose.connect(`mongodb+srv://eyeboah:${process.env.PASSWORD}@cluster0.hjv22.mongodb.net/exercise?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        const app = express();
        app.use(express.json());
        app.use("/", routes);

        app.listen(5000, () => {
            console.log('server running on port 5000');
        })
})