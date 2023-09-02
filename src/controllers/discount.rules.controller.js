const {getDiscountRules,getSingleDiscountRule,updateDiscountRule,addDiscountRule,deleteDiscountRule,removeDiscountRuleFromProduct} = require('../services/discount.rules.service');
const HTTPError = require('../utils/errors/http.error');
const NotFoundError = require('../utils/errors/resource.not.found.error');

exports.listDiscountRules = async(req,res) =>{
    try{
        const result = await getDiscountRules();
        res.status(200).json({
            success: true,
            result
        })
    }catch(error){
        if(error instanceof HTTPError){
            return res.status(error.status).json({
                 success: false,
                 message: error.message
            });
         }
        return res.status(500).json({
                success: false,
                message: error.message
            })
    }
}
exports.getSingleDiscountRule = async(req,res) =>{
    try{
        const result = await getSingleDiscountRule(req.params.id);
        res.status(200).json({
            success: true,
            result
        })
    }catch(error){
        if(error instanceof HTTPError){
            return res.status(error.status).json({
                 success: false,
                 message: error.message
            });
         }
        return res.status(500).json({
                success: false,
                message: error.message
            })
    }
}
exports.createDiscountRule = async(req,res) =>{
    try{
        const result = await addDiscountRule(req.body);
        res.status(200).json({
            success: true,
            result
        })
    }catch(error){
        if(error instanceof HTTPError){
            return res.status(error.status).json({
                 success: false,
                 message: error.message
            });
         }
        return res.status(500).json({
                success: false,
                message: error.message
            })
    }
}
exports.updateDiscountRule = async(req,res) =>{
    try{
        const result = await updateDiscountRule(req.body,req.params.id);
        res.status(200).json({
            success: true,
            result
        })
    }catch(error){
        if(error instanceof HTTPError){
            return res.status(error.status).json({
                 success: false,
                 message: error.message
            });
         }
        return res.status(500).json({
                success: false,
                message: error.message
            })
    }
}
exports.deleteDiscountRule = async(req,res) =>{
    try{
        const result = await deleteDiscountRule(req.params.id);
        res.status(200).json({
            success: true,
            result
        })
    }catch(error){
        if(error instanceof HTTPError){
            return res.status(error.status).json({
                 success: false,
                 message: error.message
            });
         }
        return res.status(500).json({
                success: false,
                message: error.message
            })
    }
}
exports.removeDiscountFromProduct = async(req,res) => {
    try{
        const result = await removeDiscountRuleFromProduct(req.params.productId,req.params.id);
        res.status(200).json({
            success: true,
            result
        })
    }catch(error){
        if(error instanceof HTTPError){
            return res.status(error.status).json({
                 success: false,
                 message: error.message
            });
         }
        return res.status(500).json({
                success: false,
                message: error.message
            })
    }
}