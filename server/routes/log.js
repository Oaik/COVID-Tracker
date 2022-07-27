const express = require("express");

const { showLogs, showLogsInCountry } = require("../controllers/log.js");
const { validateToken } = require("../middlewares/auth");

const router = express.Router();

router.get("/logs", showLogs)


module.exports = router;