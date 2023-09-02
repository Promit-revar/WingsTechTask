const Joi = require("joi");
exports.loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
exports.registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(15).required(),
  role: Joi.string().valid("admin", "user").required(),
});
exports.createProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().min(10).max(500).required(),
  price: Joi.number().required(),
  category: Joi.string()
    .valid(
      "kitchen",
      "gardern",
      "male accessory",
      "female accessory",
      "electronics"
    )
    .required(),
  image: Joi.string().optional(),
});
exports.createDiscountRuleSchema = Joi.object({
  description: Joi.string().optional(),
  percentage: Joi.number().max(100).min(0).optional(),
  amount: Joi.number().optional(),
  valid_upto: Joi.date().optional(),
  productIds: Joi.array().required(),
  category: Joi.string()
    .valid(
      "kitchen",
      "gardern",
      "male accessory",
      "female accessory",
      "electronics",
      "all",
      "order"
    )
    .required(),
});
exports.createTaxRuleValidationSchema = Joi.object({
  country: Joi.string().required(),
  state: Joi.string().required(),
  category: Joi.string()
    .valid(
      "kitchen",
      "gardern",
      "male accessory",
      "female accessory",
      "electronics",
      "all"
    )
    .optional(),
  GST: Joi.number().max(100).min(0).required(),
  SGST: Joi.number().max(100).min(0).required(),
});
exports.createOrderValidationSchema = Joi.object({
  state: Joi.string().required(),
  country: Joi.string().required(),
  productIds: Joi.array().required(),
});
exports.requestQueryForTaxApiSchema = Joi.object({
  state: Joi.string().optional(),
  country: Joi.string().optional(),
  category: Joi.string()
    .valid(
      "kitchen",
      "gardern",
      "male accessory",
      "female accessory",
      "electronics",
      "all"
    )
    .optional(),
});
exports.requestParamsIdValidationSchema = Joi.string()
  .uuid({ version: ["uuidv4"] })
  .required();
