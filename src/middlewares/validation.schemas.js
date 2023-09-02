const Joi = require('joi');
exports.loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
exports.registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(15).required(),
    role: Joi.string().valid('admin','user').required(),
});
exports.createProductSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().min(10).max(50).required(),
    price: Joi.number().required(),
    category: Joi.string().valid('kitchen','gardern','male accessory','female accessory','electronics').required(),
    image: Joi.string().optional()
});
exports.createDiscountRuleSchema = Joi.object({
    description: Joi.string().optional(),
    percentage: Joi.number().max(100).min(0).optional(),
    amount: Joi.number().when('percentage',{is:Joi.number().max(100).min(0),then: Joi.number().required(),otherwise: Joi.forbidden()}),
    valid_upto: Joi.date().optional(),
    productIds: Joi.array().required(),
    category: Joi.string().valid('kitchen','gardern','male accessory','female accessory','electronics','all').required(),
})
exports.requestParamsIdValidationSchema = Joi.string().uuid({version:['uuidv4']}).required();