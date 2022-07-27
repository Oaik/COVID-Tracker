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

module.exports = {
    showLogs,
    showLogsInCountry
}