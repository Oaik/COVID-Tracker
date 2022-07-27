
const User = require('../models/User');
const bcrypt = require("bcrypt");

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

            return res.json({
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

module.exports = {
    register,
    login
}