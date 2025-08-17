const express = require("express");
const router = express.Router();

const { contactUs } = require("../controllers/contactUs");

router.route("/").post(contactUs);

module.exports = router;
