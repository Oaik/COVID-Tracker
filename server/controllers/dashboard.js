const axios = require("axios");

const Log = require('../models/Log');

const showDashboard = async (req, res) => {    
    const logs = await Log.find({});

    let logsByCountryContainer = [];
    let countries = [];
    for(let i = 0; i < logs.length; ++i) {
        const country = logs[i].country;

        if(!logsByCountryContainer[country]) {
            logsByCountryContainer[country] = {
                countryName: country,
                length: 0,
                data: []
            };
            countries.push(country);
        }

        logsByCountryContainer[country].data.push(logs[i]);
        logsByCountryContainer[country].length++;
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