const express = require("express");
const mongoose = require("mongoose");

const config = require("./config.json");

const app = express();

mongoose.connect(config.monogoURL, { useNewUrlParser: true}).catch( (err) => {
  console.error("Error while connecting to the database", err);
});

// TESTING
const User = require('./models/User');
const Log = require('./models/Log');

Log.find({}).populate('user_id') // only works if we pushed refs to person.eventsAttended
.exec(function(err, person) {
    if (err) return console.log(err);
    console.log(person);
});

// const newUser = User.findOne({
//   email: "hello@he.com"
// }).then((data) => {
//   const newLog = new Log();
//   newLog.user_id = data._id;
//   newLog.temperature = 5;
//   newLog.latitude = 4;
//   newLog.longitude = 2;
//   newLog.country = "EGYPT";

//   newLog.save();
//   console.log(data);
// });

// const newUser = new User();
// newUser.email = "hello@he.com";
// newUser.name = "ana";
// newUser.password = "anaana";
// newUser.save();


app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});