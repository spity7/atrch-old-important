const Property = require("../models/Property");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllProperties = async (req, res) => {
  const properties = await Property.find();
  res.status(StatusCodes.OK).json({ properties, count: properties.length });
};

const createProperty = async (req, res) => {
  const property = await Property.create(req.body);
  res.status(StatusCodes.CREATED).json({ property });
};

const updateProperty = async (req, res) => {
  const { id: propertyId } = req.params;

  const property = await Property.findByIdAndUpdate(propertyId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!property) {
    throw new NotFoundError(`No property with id ${propertyId}`);
  }

  res.status(StatusCodes.OK).json({ property });
};

const deleteProperty = async (req, res) => {
  const { id: propertyId } = req.params;

  const property = await Property.findByIdAndRemove(propertyId);

  if (!property) {
    throw new NotFoundError(`No property with id ${propertyId}`);
  }

  res.status(StatusCodes.OK).send();
};

module.exports = {
  getAllProperties,
  createProperty,
  updateProperty,
  deleteProperty,
};
