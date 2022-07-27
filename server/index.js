const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config.json");

// importing routes
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const logRoute = require('./routes/log');

const app = express();

// connect database
mongoose.connect(config.monogoURL, { useNewUrlParser: true}).catch( (err) => {
  console.error("Error while connecting to the database", err);
});

// middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes
app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/api', logRoute);

// running the server
app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});