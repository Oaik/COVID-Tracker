const axios = require("axios");

const Log = require('../models/Log');

const showDashboard = async (req, res) => {    
    const logs = await Log.find({});

    let logsByCountryContainer = [];
    let countries = [];
    for(let i = 0; i < logs.length; ++i) {
        const countryName = logs[i].countryName;
        const countryCode = logs[i].countryCode;

        if(!logsByCountryContainer[countryName]) {
            logsByCountryContainer[countryName] = {
                countryName: countryName,
                countryCode: countryCode,
                latitude: logs[i].latitude,
                longitude: logs[i].longitude,
                length: 0,
                data: []
            };
            countries.push(countryName);
        }

        logsByCountryContainer[countryName].data.push(logs[i]);
        logsByCountryContainer[countryName].length++;
    }

    let dashboardData = [];
    for(let i = 0; i < countries.length; ++i) {
        const country = countries[i];

        dashboardData.push(logsByCountryContainer[country])
    }

    res.json(dashboardData);
}


module.exports = {
    showDashboard
}