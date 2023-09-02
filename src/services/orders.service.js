const db = require("../models");
const { Op } = require("sequelize");
const HTTPError = require("../utils/errors/http.error");
const NotFoundError = require("../utils/errors/resource.not.found.error");
const { getSingleProduct } = require("./product.service");
const { getAllDiscountsForProduct } = require("./discount.rules.service");
const { calculatePrice } = require("../utils/helper");
exports.getOrders = async (email) => {
  const orders = await db.Orders.findAndCountAll({
    where: {
      userId: email
    },
  });
  return orders;
};
exports.createOrder = async (data,email) => {
  const products = JSON.parse(JSON.stringify(await Promise.all(
    data.productIds.map(async (productId) => {
      const product = JSON.parse(JSON.stringify(await getSingleProduct(productId)));
      const discountsApplicable = JSON.parse(JSON.stringify(await getAllDiscountsForProduct(productId)));
      const discounted_rate =
        product.price - calculatePrice(discountsApplicable, product);
      return { ...product, discounted_rate };
    })
  )));
  let totalAmount = products.reduce((total, product) => total + product.discounted_rate, 0);
  const overallDiscount = JSON.parse(
    JSON.stringify(
      await db.Discount_Rules.findOne({
        where: {
          category: "order",
          amount: {
            [Op.gte]: totalAmount,
          },
        },
      })
    )
  );
  console.log(totalAmount);
  let finalDiscount = 0.0;
  if (overallDiscount) {
    finalDiscount = Math.round(
      totalAmount * (overallDiscount.percentage / 100)
    );
    totalAmount = totalAmount - finalDiscount;
  }
  const applicableTax = JSON.parse(
    JSON.stringify(
      await db.Tax_Rules.findOne({
        where: {
          country: data.country,
          state: data.state,
        },
      })
    )
  );
  if (!applicableTax) {
    const order = await db.Orders.create({
      ...data,
      userId: email,
      productIds: products,
      overallDiscount: finalDiscount,
      amount: totalAmount,
    });
    return { order: order.id, products, tax: null, totalAmount };
  }

  const CGST =
    totalAmount + Math.round(totalAmount * (applicableTax.GST / 100));
  const SGST =
    totalAmount + Math.round(totalAmount * (applicableTax.SGST / 100));
  const order = await db.Orders.create({
    ...data,
    userId: email,
    productIds: products,
    overallDiscount: finalDiscount,
    applicableTax: applicableTax,
    amount: totalAmount + SGST + CGST,
  });

  return {
    order: order.id,
    products,
    tax: { SGST, CGST },
    totalAmount: totalAmount + SGST + CGST,
  };
};
exports.deleteOrder = async (id) => {
  const order = JSON.parse(
    JSON.stringify(
      await db.Orders.findOne({
        where: {
          id,
        },
      })
    )
  );
  if (!order) throw new NotFoundError("Order With Given Id is Not Found");
  const result = await db.Orders.destroy({
    where: {
      id,
    },
  });
  return {
    message: "order deleted successfully",
  };
};
