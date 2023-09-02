const express = require('express');
const {validateUser} = require('../middlewares/auth.validation');
const {loginValidation, registerValidation} = require('../middlewares/request.validator');
const {login, register} = require('../controllers/auth.controller');
const router = express();
router.use(express.json());
router.get('/',(req,res)=>{
    res.send("Hello World");
});

//auth routes...
router.post('/login',loginValidation,validateUser,login);
router.post('/register',registerValidation,register);

//

module.exports = router;