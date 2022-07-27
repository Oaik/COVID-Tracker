
// TESTING
const User = require('./models/User');
const Log = require('./models/Log');

Log.findOne({}).populate('user_id') // only works if we pushed refs to person.eventsAttended
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

Log.find({country: "USA"}).then((data) => {
    console.log(data);
})