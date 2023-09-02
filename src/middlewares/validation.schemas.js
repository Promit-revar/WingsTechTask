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
