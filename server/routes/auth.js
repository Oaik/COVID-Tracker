const express = require("express");

const { login, register, tokenVerfication } = require("../controllers/auth.js");
const { validateToken } = require("../middlewares/auth.js");

const router = express.Router();

router.get("/auth", validateToken, tokenVerfication)

router.post("/register", register)

router.post("/login", login)

module.exports = router;