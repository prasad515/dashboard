const express = require("express");
const router = express.Router();
const controller = require("../controllers");

router.get("/", controller.get_login);
router.post("/login", controller.get_user);

module.exports = router;