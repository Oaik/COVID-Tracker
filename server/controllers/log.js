const axios = require("axios");

const Log = require('../models/Log');

const showLogs = async (req, res) => {
    const country = req.query.country;
    if(country) {
        const logs = await showLogsInCountry(country)
        return res.json(logs);
    }
    
    Log.find({}).then((data) => res.json(data));
}

const showLogsInCountry = async (country) => {
    return Log.find({country: country});
}

const createLog = async (req, res) => {
    const countryList = await findCountry(req.body.latitude, req.body.longitude).catch((error) => {
        console.log("error while finding the country", error);

        return res.json({error});
    });
    
    const newLog = new Log({
        ...req.body,
        user_id: req.user.id,
        ...countryList
    })
    
    newLog.save().catch((error) => {
        console.log("Error while saving the log", error);

        return res.json({error: error});
    })

    return res.json("Log saved");
}

const findCountry = async (latitude, longitude) => {
    const res = await axios.get(`http://api.geonames.org/countryCodeJSON?lat=${latitude}&lng=${longitude}&username=oaik`);

    return {countryName: res.data.countryName, countryCode: res.data.countryCode};
}

module.exports = {
    showLogs,
    showLogsInCountry,
    createLog
}