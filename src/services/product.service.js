const db = require('../models');
const HTTPError = require('../utils/errors/http.error');
const NotFoundError = require('../utils/errors/resource.not.found.error');
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
    const product  = await db.Products.create({
       ...data
    });
    return product;
}
exports.deleteProduct = async(id) => {
    const product = await db.findOne({where:{
        id
    }});
    if(!product) throw new NotFoundError('Product With Given Id is Not Found');
    //update discount rules to remove product id..
    const result = await db.destroy({
        where:{
            id
        }
    });

}
exports.updateProduct = async(data,id) =>{
    const product = await db.findOne({where:{
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