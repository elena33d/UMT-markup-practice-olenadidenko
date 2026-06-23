const Joi = require("joi");

const createBouquetSchema = Joi.object({
  photo: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.string().required(),
  favourite: Joi.boolean().required(),
});

const updateBouquetSchema = Joi.object({
  photo: Joi.string(),
  title: Joi.string(),
  description: Joi.string(),
  price: Joi.string(),
  favourite: Joi.boolean(),
});

module.exports = { createBouquetSchema, updateBouquetSchema };