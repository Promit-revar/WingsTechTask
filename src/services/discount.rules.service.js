const db = require("../models");
const { Op } = require("sequelize");
const HTTPError = require("../utils/errors/http.error");
const NotFoundError = require("../utils/errors/resource.not.found.error");
exports.getDiscountRules = async () => {
  const discountRules = await db.Discount_Rules.findAndCountAll();
  return discountRules;
};
exports.getSingleDiscountRule = async (id) => {
  const discountRule = await db.Discount_Rules.findOne({
    where: {
      id,
    },
  });
  if (!discountRule)
    throw new NotFoundError("Discount Rule With Given Id is Not Found");
  return discountRule;
};
exports.addDiscountRule = async (data) => {
  const discount = await db.Discount_Rules.findOne({
    where: {
      ...data,
    },
  });
  if (discount) throw new HTTPError("Rule Already exists!", 400);
  if (data.amount > 0 && data.percentage > 0 && data.category !== "order")
    throw new HTTPError(
      "Discount Rule can either have percentage or amount not both for category other than order",
      400
    );
  if (data.category === "All") {
    const products = JSON.parse(JSON.stringify(await db.Products.findAll()));
    data.productIds = data.productIds.concat(products.map((item) => item.id));
  } else if (data.category) {
    const products = JSON.parse(
      JSON.stringify(
        await db.Products.findAll({
          where: {
            category: data.category,
          },
        })
      )
    );

    data.productIds = data.productIds.concat(products.map((item) => item.id));
  }
  const discountRule = await db.Discount_Rules.create({
    ...data,
  });
  return discountRule;
};
exports.deleteDiscountRule = async (id) => {
  const discountRule = await db.Discount_Rules.findOne({
    where: {
      id,
    },
  });
  if (discountRule)
    throw new NotFoundError("Discount Rule With Given Id is Not Found");
  const result = await db.Discount_Rules.destroy({
    where: {
      id,
    },
  });
};
exports.updateDiscountRule = async (data, id) => {
  const discountRule = await db.Discount_Rules.findOne({
    where: {
      id,
    },
  });
  if (!discountRule)
    throw new NotFoundError("Discount Rule With Given Id is Not Found");
  if (data.productIds) {
    data.productIds = data.productIds.concat(discountRule.productIds);
  }
  await db.Discount_Rules.update(
    { ...data },
    {
      where: { id },
    }
  );
  return {
    message: "updated successfully",
  };
};
exports.removeDiscountRuleFromProduct = async (productId, discountId) => {
  const discountRule = await db.Discount_Rules.findOne({
    where: {
      id: discountId,
    },
  });
  if (!discountRule)
    throw new NotFoundError("Discount Rule With Given Id is Not Found");
  const products = discountRule.productIds.filter((item) => item !== productId);
  await db.Discount_Rules.update(
    {
      productIds: [...products],
    },
    {
      where: {
        id: discountId,
      },
    }
  );
  return {
    message: "product removed successfully",
  };
};
exports.getAllDiscountsForProduct = async (productId) => {
  const discounts = await db.Discount_Rules.findAll({
    where: {
      productIds: {
        [Op.contains]: [productId],
      },
      valid_upto: {
        [Op.gte]: new Date(),
      },
    },
    order: [
      ["percentage", "DESC"],
      ["amount", "DESC"],
    ],
  });
  return discounts;
};
