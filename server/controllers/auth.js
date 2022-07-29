// dependencies
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// models
const User = require('../models/User');

// others
const config = require('../config.json');

const tokenVerfication = (req, res) => {
    return res.json({
        ...req.user
    });
}

const register = (req, res) => {
    bcrypt.hash(req.body.password, 5).then((hashedPassword) => {
        const newUser = new User({
            ...req.body,
            password: hashedPassword
        });

        newUser.save((error) => {
            if(error) {
                console.log("error while register", error);
                return res.send("Error while creating user");
            }

            return res.send("User created");        
        });
    }).catch( (error) => {
        console.error("Error while hashing the passwored", error);

        return res.send("Error while hashing the password of the user");
    });
}

const login = (req, res) => {
    User.findOne({email: req.body.email}).then((user) => {
        if(!user) {
            return res.send("Email does not exists");
        }

        bcrypt.compare(req.body.password, user.password).then((isMatch) => {
            if(!isMatch) {
                return res.send("password does not match");
            }

            const token = jwt.sign({
                "id": user._id,
                "name": user.name,
                "email": user.email}, config.secretKey);

            return res.json({
                accessToken: token,
                id: user._id,
                name: user.name
            });
        }).catch( (error) => {
            console.error("Error while comparing the passwored", error);

            return res.send("Error while comparing the password of the user");
        });
        
    }).catch((error) => {
        console.error("Error while finding the user", error);

        return res.send("Login Falied while finding user");
    })
}

const logout = (req, res) => {
    req.user = null;
    res.send("Logout success");
}

module.exports = {
    tokenVerfication,
    register,
    login,
    logout
}