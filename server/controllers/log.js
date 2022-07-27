const Log = require('../models/Log');

const showLogs = (req, res) => {
    Log.find({}).then((data) => res.json(data));
}

module.exports = {
    showLogs
}