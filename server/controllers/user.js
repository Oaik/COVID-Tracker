// dependencies
const jwt = require("jsonwebtoken");

// models
const User = require('../models/User');
const Log = require('../models/Log');

const config = require('../config.json');

const showCurrentUser = async (req, res) => {
    const userInfo = {
        ...req.user,
        logs: await Log.find({user_id: req.user.id})
    }

    return res.json(userInfo);
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