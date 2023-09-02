const Joi = require('joi');
const {loginSchema,requestQueryForTaxApiSchema,createTaxRuleValidationSchema, registerSchema, createProductSchema, requestParamsIdValidationSchema, createDiscountRuleSchema} = require('./validation.schemas');

exports.loginValidation = (req,res,next) =>{
    const {error} = loginSchema.validate(req.body);
    if(error) {
        return res.status(400).json({success:false, message: error.message });
    }
    else{
        next();
    }
}
exports.registerValidation = (req,res,next) =>{
    const {error} = registerSchema.validate(req.body);
    if(error) {
        return res.status(400).json({success:false, message: error.message });
    }
    else{
        next();
    }
}
exports.createProductValidation = (req,res,next) =>{
    const {error} = createProductSchema.validate(req.body);
    if(error) {
        return res.status(400).json({success:false, message: error.message });
    }
    else{
        next();
    }
}
exports.validateId = (req,res,next) =>{
    const {error} = requestParamsIdValidationSchema.validate(req.params.id);
    if(error) {
        return res.status(400).json({success:false, message: error.message });
    }
    else{
        next();
    }
}
exports.createDiscountRuleValidation = (req,res,next) =>{
    const {error} = createDiscountRuleSchema.validate(req.params.id);
    if(error) {
        return res.status(400).json({success:false, message: error.message });
    }
    else{
        next();
    }
}
exports.requestQueryValidationTax = (req,res,next) =>{
    const {error} = requestQueryForTaxApiSchema.validate(req.query);
    if(error) {
        return res.status(400).json({success:false, message: error.message });
    }
    else{
        next();
    }
}
exports.createTaxRuleValidation = (req,res,next) =>{
    const {error} = createTaxRuleValidationSchema.validate(req.body);
    if(error) {
        return res.status(400).json({success:false, message: error.message });
    }
    else{
        next();
    }
}
