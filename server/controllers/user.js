// dependencies
const jwt = require("jsonwebtoken");

// models
const User = require('../models/User');

const config = require('../config.json');

const showCurrentUser = (req, res) => {    
    return res.json(req.user);
}

const updateCurrentUser = async (req, res) => {
    const paramId = req.params.id;
    if(paramId !== req.user.id) {
        console.log(req.user.id)
        return res.send("Unauthorized to update the profile");
    }
    
    User.findByIdAndUpdate(req.user.id, {name: req.body.name}, {new: true}).then((user) => {
        const token = jwt.sign({
            "id": user._id,
            "name": user.name,
            "email": user.email}, config.secretKey);
    
        return res.json({
            accessToken: token,
            user: {
                "id": user._id,
                "name": user.name,
                "email": user.email
            }
        });
    }).catch((error) => {
        console.log("Error while updating user");

        return res.json({error: error});
    });


}

module.exports = {
    showCurrentUser,
    updateCurrentUser
}