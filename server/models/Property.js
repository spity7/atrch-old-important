const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const PropertySchema = new mongoose.Schema(
  {
    propertyId: {
      type: Number,
      unique: true,
    },
    project: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    yearBuilt: {
      type: Number,
      required: true,
    },
    features: {
      type: [[String]],
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    mapSrc: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
    rooms: {
      type: Number,
      required: true,
    },
    baths: {
      type: Number,
      required: true,
    },
    sqm: {
      type: Number,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    agent: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
    filterOptions: {
      type: [String],
      required: true,
    },
    type: {
      type: [String],
      required: true,
    },
    floor: {
      type: String,
      required: true,
    },
    block: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    gallery: {
      type: [{ href: String, className: String, src: String }],
      required: true,
    },
  },
  { timestamps: true }
);

PropertySchema.plugin(AutoIncrement, { inc_field: "propertyId" });

module.exports = mongoose.model("Property", PropertySchema);
