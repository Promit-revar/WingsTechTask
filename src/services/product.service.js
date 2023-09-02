const db = require('../models');
const {Op} = require('sequelize');
const HTTPError = require('../utils/errors/http.error');
const NotFoundError = require('../utils/errors/resource.not.found.error');
const {removeDiscountRuleFromProduct} = require('./discount.rules.service');
exports.getProducts = async() => {
    const products = await db.Products.findAndCountAll();
    return products;
}
exports.getSingleProduct = async(id) => {
    const product = await db.Products.findOne({
        where:{
            id
        }
    });
    if(!product) throw new NotFoundError('Product With Given Id is Not Found');
    return product;
}
exports.addProduct = async(data) => {
    const product = await db.Products.findOne({
        where: {...data}
    });
    if(product) throw new HTTPError('Product Already Exists!',400);
    const newProduct  = await db.Products.create({
       ...data
    });
    return newProduct;
}
exports.deleteProduct = async(id) => {
    const product =JSON.parse(JSON.stringify(await db.Products.findOne({where:{
        id
    }})));
    if(!product) throw new NotFoundError('Product With Given Id is Not Found');
    const discountRules = await db.Discount_Rules.findAll({
        where:{
            productIds:{
                [Op.contains]: [id]
            }
        }
    });
    if(discountRules.length>0){
        await Promise.all(discountRules.productIds.map(async (item)=>{
            const result = await removeDiscountRuleFromProduct(id,item.id);
        }));
    }
    const result = await db.Products.destroy({
        where:{
            id
        }
    });
    return {
        message: "product deleted successfully"
    }
}
exports.updateProduct = async(data,id) =>{
    const product = await db.Products.findOne({where:{
        id
    }});
    if(!product) throw new NotFoundError('Product With Given Id is Not Found');
    await db.Products.update({...data},{
        where:{id}
    });
    return {
        message: "updated successfully"
    }
}