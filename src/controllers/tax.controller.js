const {getTaxRules,addTaxRule,deleteTaxRule,updateTaxRule} = require('../services/tax.service');
const HTTPError = require('../utils/errors/http.error');


exports.listTaxRules = async(req,res) =>{
    try{
        const result = await getProducts(req.query);
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

exports.createTaxRule = async(req,res) =>{
    try{
        const result = await addTaxRule(req.body);
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
exports.updateTaxRule = async(req,res) =>{
    try{
        const result = await updateTaxRule(req.body,req.params.id);
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
exports.deleteTaxRule = async(req,res) =>{
    try{
        const result = await deleteTaxRule(req.params.id);
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