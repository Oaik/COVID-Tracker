const express = require("express");

const { showCurrentUser } = require("../controllers/user.js");
const { validateToken } = require("../middlewares/auth");

const router = express.Router();

router.get("/profile", validateToken, showCurrentUser)

module.exports = router;