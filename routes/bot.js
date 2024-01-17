const express = require("express");
const { getReportBot, getChatBot } = require("../controllers/bot");
const router = express.Router();

router.get("/", getReportBot);

router.get("/getChatBot", getChatBot);

module.exports = router;
