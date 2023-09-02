const jwt = require('jsonwebtoken');
exports.validateUser = async(req,res,next) => {
    try{
    const token = req.headers.authorization;
    if(!token){
        return res.status(400).json({success: false, message: 'Access Token Missing'});
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(decoded.userData.role){
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
exports.validateAdmin = async(req,res,next) => {
    try{
    const token = req.headers.authorization;
    if(!token){
        return res.status(400).json({success: false, message: 'Access Token Missing'});
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(decoded.userData.role === 'admin'){
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