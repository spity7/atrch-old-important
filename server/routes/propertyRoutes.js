const express = require("express");
const {
  getAllProperties,
  getPropertyByPropertyId,
  getTypes,
  updateProperty,
  createProperty,
} = require("../controllers/propertyController");

const protectRoute = require("../middlewares/protectRoute.js");

const router = express.Router();

router.get("/get-all-properties", getAllProperties);
router.get("/property/:propertyId", getPropertyByPropertyId);
router.put("/update-property/:propertyId", protectRoute, updateProperty);
router.get("/types", getTypes);
router.post("/create-property", protectRoute, createProperty);

module.exports = router;
