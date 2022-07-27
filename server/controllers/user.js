// dependencies
const jwt = require("jsonwebtoken");

// models
const User = require('../models/User');

// others
const config = require('../config.json');

const showCurrentUser = (req, res) => {    
    return res.json(req.user);
}

const updateCurrentUser = (req, res) => {
    const paramId = req.params.id;
    if(paramId !== req.user.id) {
        console.log(req.user.id)
        return res.send("Unauthorized to update the profile");
    }
    
    User.findByIdAndUpdate(req.user.id, {name: req.body.name}).catch((error) => {
        console.log("Error while updating user");

        return res.json({error: error});
    });

    return res.json("user updated");
}

module.exports = {
    showCurrentUser,
    updateCurrentUser
}