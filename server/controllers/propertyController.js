const Property = require("../models/propertyModel.js");
const { Parser } = require("json2csv");
const logger = require("../config/logger.js");
const { uploadImage, bucket } = require("../utils/gcs");

// default property template
const defaultPropertyData = {
  project: "mila one",
  status: "available",
  imgSrc: "/images/home/BR-Mila-Scene-08.0.jpg",
  alt: "img",
  address: "Tyre / Lebanon",
  title: "Studio",
  description:
    "Perfectly designed for modern urban living, our studio units offer a blend of style and convenience.",
  yearBuilt: 2024,
  features: [
    [
      "Open-Concept Living",
      "Flexible Furnishing Options",
      "Sleek Kitchenette",
      "Breathtaking Views",
    ],
  ],
  city: "Tyre",
  country: "Lebanon",
  mapSrc: "/images/mila-one-maps/f2-06.jpg",
  beds: 1,
  rooms: 2,
  baths: 1,
  sqm: 63,
  tags: ["Featured", "For Rent"],
  avatar: "/images/home/BR-Mila-Scene-08.0.jpg",
  agent: "Ali",
  lat: 40.7279707552121,
  long: -74.07152705896405,
  filterOptions: ["Studio"],
  type: ["interiar"],
  floor: "First",
  block: "A",
  price: 125,
  gallery: [
    {
      href: "/images/studio/studio1.jpeg",
      className: "item2 box-img",
      src: "/images/studio/studio1.jpeg",
    },
  ],
};

exports.getAllProperties = async (req, res) => {
  try {
    const { search, project, types = [], page = 1, limit = 6 } = req.query;
    const query = {};

    if (project) {
      query.project = project;
    }

    if (search) {
      const searchRegex = new RegExp(search, "i"); // Case-insensitive regex
      query.$or = [{ title: { $regex: searchRegex } }];
    }

    if (types.length > 0) {
      // ensure types is an array of strings
      const typesArray = Array.isArray(types) ? types : types.split(",");
      query.type = { $in: typesArray };
    }

    const properties = await Property.find(query)
      .sort({ order: 1, createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Property.countDocuments(query);

    res
      .status(200)
      .json({ properties, total, page: Number(page), limit: Number(limit) });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

exports.getPropertyByPropertyId = async (req, res) => {
  try {
    const { propertyId } = req.params;
    const property = await Property.findOne({
      propertyId: Number(propertyId),
    });
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

exports.getTypes = async (req, res) => {
  try {
    const { project } = req.query;

    const query = {};
    if (project) {
      query.project = project; // Filter by project if specified
    }

    const types = await Property.distinct("type", query);
    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

exports.updateProperty = async (req, res) => {
  try {
    const { propertyId } = req.params;
    const updateData = req.body;

    console.log("Received updateData:", updateData);

    // 1️⃣ Fetch existing property (to compare old gallery)
    const existingProperty = await Property.findOne({
      propertyId: Number(propertyId),
    });

    if (!existingProperty) {
      return res.status(404).json({ error: "Property not found" });
    }

    const uploadedGallery = [];
    const filesToDelete = [];

    // 2️⃣ Process gallery updates
    if (Array.isArray(updateData.gallery)) {
      for (let i = 0; i < updateData.gallery.length; i++) {
        const img = updateData.gallery[i];

        // Case A: already a GCS URL → keep it
        if (img.src && img.src.startsWith("http")) {
          uploadedGallery.push(img);
          continue;
        }

        // Case B: new base64 image → upload to GCS
        const matches = img.src && img.src.match(/^data:(.+);base64,(.+)$/);
        if (!matches) continue;

        const mimeType = matches[1];
        const buffer = Buffer.from(matches[2], "base64");
        const ext = mimeType.split("/")[1] || "jpg";
        const fileName = `property-${Date.now()}-${Math.round(
          Math.random() * 1e9
        )}-${i}.${ext}`;

        const publicUrl = await uploadImage(buffer, fileName, mimeType);

        uploadedGallery.push({
          src: publicUrl,
          href: publicUrl,
          className: img.className || `item${i + 2} box-img`,
        });

        // If an image was replaced, mark old one for deletion
        if (existingProperty.gallery[i]?.src?.startsWith("http")) {
          const oldUrl = existingProperty.gallery[i].src;
          const oldFileName = decodeURIComponent(oldUrl.split("/").pop());
          filesToDelete.push(oldFileName);
        }
      }

      updateData.gallery = uploadedGallery;
    }

    // 3️⃣ Update MongoDB
    const updatedProperty = await Property.findOneAndUpdate(
      { propertyId: Number(propertyId) },
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedProperty) {
      return res.status(404).json({ error: "Property not found" });
    }

    // 4️⃣ Cleanup: delete replaced files from GCS
    if (filesToDelete.length > 0) {
      await Promise.all(
        filesToDelete.map((fileName) =>
          bucket
            .file(fileName)
            .delete()
            .then(() => console.log(`Deleted old image: ${fileName}`))
            .catch((err) =>
              console.warn(`Skip delete ${fileName}:`, err.message)
            )
        )
      );
    }

    console.log("Updated property:", updatedProperty);

    res.status(200).json(updatedProperty);
  } catch (error) {
    console.error("updateProperty error:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.createProperty = async (req, res) => {
  try {
    const { city, type, gallery, order } = req.body;

    if (!city || !type || !gallery || gallery.length === 0 || !order) {
      return res
        .status(400)
        .json({ error: "City, type, order, and gallery are required" });
    }

    const uploaded = []; // track uploaded filenames for cleanup if needed
    const uploadedGallery = [];

    for (let i = 0; i < gallery.length; i++) {
      const img = gallery[i];
      // expect img.src to be dataURL: data:<mime>;base64,<data>
      const matches = img.src && img.src.match(/^data:(.+);base64,(.+)$/);
      if (!matches) {
        // skip or throw depending on your policy
        continue;
      }
      const mimeType = matches[1];
      const buffer = Buffer.from(matches[2], "base64");
      const ext = mimeType.split("/")[1] || "jpg";
      const fileName = `property-${Date.now()}-${Math.round(
        Math.random() * 1e9
      )}-${i}.${ext}`;

      // uploadImage saves file and returns public URL (no makePublic call)
      const publicUrl = await uploadImage(buffer, fileName, mimeType);
      uploaded.push(fileName); // track
      uploadedGallery.push({
        src: publicUrl,
        href: publicUrl,
        className: img.className || `item${i + 2} box-img`,
      });
    }

    // merge defaults with user-provided data (override default fields if provided)
    const newPropertyData = {
      ...defaultPropertyData,
      city,
      type,
      gallery: uploadedGallery,
      order,
    };

    const newProperty = await Property.create(newPropertyData);

    return res.status(201).json(newProperty);
  } catch (error) {
    logger.error("createProperty error", error);

    // attempt cleanup: remove files we uploaded
    if (typeof uploaded !== "undefined" && uploaded.length) {
      try {
        await Promise.all(
          uploaded.map((name) =>
            bucket
              .file(name)
              .delete()
              .catch(() => null)
          )
        );
      } catch (cleanupErr) {
        logger.error("Cleanup error:", cleanupErr);
      }
    }

    return res
      .status(500)
      .json({ error: "Server Error", details: error.message });
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    const { propertyId } = req.params;

    const deletedProperty = await Property.findOneAndDelete({
      propertyId: Number(propertyId),
    });

    if (!deletedProperty) {
      return res.status(404).json({ error: "Property not found" });
    }

    res.status(200).json({ message: "Property deleted successfully" });
  } catch (error) {
    res.status(500).json({
      error: "Server Error",
      details: error.message,
    });
  }
};
