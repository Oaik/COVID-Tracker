const jwt = require("jsonwebtoken");

const config = require('../config.json');

const validateToken = async (req, res, next) => {
    const accessToken = req.headers.accesstoken;
    if(!accessToken) {
        return res.send("Unauthorized to visit this page please login first");
    }

    try {
        const decodedData = jwt.verify(accessToken, config.secretKey);

        req.user = decodedData;
        next();
    } catch(error) {
        console.log("Error while decoding the token", error);

        return res.json({error: error, errorMessage: "Error while decoding the token"});
    }
}

module.exports = {
    validateToken
}