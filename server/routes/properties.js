const express = require("express");
const router = express.Router();

const {
  getAllProperties,
  createProperty,
} = require("../controllers/properties");

router.route("/").post(createProperty).get(getAllProperties);

module.exports = router;
