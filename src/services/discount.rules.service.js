const db = require('../models');
const HTTPError = require('../utils/errors/http.error');
const NotFoundError = require('../utils/errors/resource.not.found.error');
exports.getDiscountRules = async() => {
    const discountRules = await db.Discount_Rules.findAndCountAll();
    return discountRules;
}
exports.getSingleDiscountRule = async(id) => {
    const discountRule = await db.Discount_Rules.findOne({
        where:{
            id
        }
    });
    if(!discountRule) throw new NotFoundError('Discount Rule With Given Id is Not Found');
    return discountRule;
}
exports.addDiscountRule = async(data) => {
    const discount = await db.Discount_Rules.findOne({
        where:{
            ...data
        }
    });
    if(discount) throw new HTTPError('Rule Already exists!',400);
    if(data.amount>0 && data.percentage>0) throw new HTTPError('Discount Rule can either have percentage or amount not both',400);
    const discountRule  = await db.Discount_Rules.create({
       ...data
    });
    return discountRule;
}
exports.deleteDiscountRule = async(id) => {
    const discountRule = await db.Discount_Rules.findOne({where:{
        id
    }});
    if(discountRule) throw new NotFoundError('Discount Rule With Given Id is Not Found');
    const result = await db.Discount_Rules.destroy({
        where:{
            id
        }
    });

}
exports.updateDiscountRule = async(data,id) =>{
    const discountRule = await db.Discount_Rules.findOne({where:{
        id
    }});
    if(!discountRule) throw new NotFoundError('Discount Rule With Given Id is Not Found');
    if(data.productIds){
        data.productIds = data.productIds.concat(discountRule.productIds);
    }
    await db.Discount_Rules.update({...data},{
        where:{id}
    });
    return {
        message: "updated successfully"
    }
}
exports.removeDiscountRuleFromProduct = async(productId,discountId) =>{
    const discountRule = await db.Discount_Rules.findOne({
        where:{
            id: discountId
        }
    });
    if(!discountRule) throw new NotFoundError('Discount Rule With Given Id is Not Found');
    const products = discountRule.productIds.filter((item) => item !== productId);
    await db.Discount_Rules.update({
        productIds: [...products]
    },{
        where:{
            id: discountId
        }
    });
    return {
        message: 'product removed successfully'
    }
}