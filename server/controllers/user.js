// dependencies
const jwt = require("jsonwebtoken");

// models
const User = require('../models/User');

// others
const config = require('../config.json');

const showCurrentUser = (req, res) => {
    const accessToken = req.headers.accesstoken;
    if(!accessToken) {
        return res.send("Unauthorized to visit this page please login first");
    }

    try {
        const decoded = jwt.verify(accessToken, config.secretKey);

        return res.json(decoded);
    } catch(error) {
        console.log("Error while decoding the token", error);

        return res.send("Error while decoding the token");
    }
}


module.exports = {
    showCurrentUser
}