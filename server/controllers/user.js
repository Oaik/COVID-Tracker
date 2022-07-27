// dependencies
const jwt = require("jsonwebtoken");

// models
const User = require('../models/User');

// others
const config = require('../config.json');

const showCurrentUser = (req, res) => {    
    return res.json(req.user);
}


module.exports = {
    showCurrentUser
}