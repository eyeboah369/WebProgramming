const { reset } = require("nodemon");
require("dotenv").config();
const User = require("../models/user");
const config = require('../config/auth');

exports.getUserInfo = async (req, res) => {
    await res.json(req.body);
}