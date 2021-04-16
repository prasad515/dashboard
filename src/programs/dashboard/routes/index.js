const express = require("express");
const router = express.Router();
const controller = require("../controllers");

router.get("/dashboard", controller.get_dashboard);
module.exports = router;