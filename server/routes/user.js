const express = require("express");
const { showCurrentUser } = require("../controllers/user.js");

const router = express.Router();

router.get("/profile", showCurrentUser)

module.exports = router;