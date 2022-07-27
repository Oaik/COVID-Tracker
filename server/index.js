const express = require("express");
const mongoose = require("mongoose");

const config = require("./config.json");

const app = express();

mongoose.connect(config.monogoURL, { useNewUrlParser: true}).catch( (err) => {
  console.error("Error while connecting to the database", err);
});

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});