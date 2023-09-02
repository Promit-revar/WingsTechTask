const jwt = require('jsonwebtoken');
exports.validateUser = async(req,res,next) => {
    try{
    const token = req.authentication;
    if(!token){
        return res.status(400).json({success: false, message: 'Access Token Missing'});
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(decoded.role){
        next();
    }
    else{
        return res.status(401).json({success: false, message: 'Unauthorized'});
    }
}
catch(error){
    return res.status(400).json({success: false, message: 'Invalid Access Token Provided'});
}
}