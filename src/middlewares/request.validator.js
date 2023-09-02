const Joi = require('joi');
const {loginSchema, registerSchema} = require('./validation.schemas');

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
