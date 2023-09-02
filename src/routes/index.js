const express = require('express');
const {validateUser, validateAdmin} = require('../middlewares/auth.validation');
const {loginValidation, registerValidation} = require('../middlewares/request.validator');
const {createProduct,getSingleProduct,listProducts,updateProduct,deleteProduct} = require('../controllers/product.controller');
const {login, register} = require('../controllers/auth.controller');
const router = express();
router.use(express.json());
router.get('/',(req,res)=>{
    res.send("Hello World");
});

//auth routes...
router.post('/login',loginValidation,login);
router.post('/register',registerValidation,register);

//product routes ...
router.get('/products',validateUser,listProducts);
router.get('/products/:id',validateUser,getSingleProduct);
router.patch('/products/update/:id',validateAdmin,updateProduct);
router.delete('/products/delete/:id',validateAdmin,deleteProduct);
router.post('/products/create',validateAdmin,createProduct);

module.exports = router;