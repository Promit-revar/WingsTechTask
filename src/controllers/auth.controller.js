const {loginService, registerUserService} = require('../services/auth.service');
const HTTPError = require('../utils/errors/http.error');
const NotFoundError = require('../utils/errors/resource.not.found.error');
exports.login = async(req,res) => {
    try{
        const result = await loginService(req.body);
        res.status(200).json({
            success: true,
            result
        })
    }catch(error){
        if(error instanceof HTTPError || error instanceof NotFoundError){
           return res.status(error.status).json({
                success: false,
                message: error.message
           });
        }
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}
exports.register = async(req,res) =>{
    try{
        const result = await registerUserService(req.body);
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