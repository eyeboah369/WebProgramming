const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes")

mongoose.connect("mongodb://localhost:27017/userdb", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        const app = express();
        app.use("/api", routes);

        app.listen(5000, () => {
            console.log('server running on port 5000');
        })
})