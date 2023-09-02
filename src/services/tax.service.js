const db = require("../models");
const { Op } = require("sequelize");
const HTTPError = require("../utils/errors/http.error");
const NotFoundError = require("../utils/errors/resource.not.found.error");

exports.getTaxRules = async (query) => {
  const taxes = await db.Tax_Rules.findAndCountAll({
    where:query
  });
  return taxes;
};
exports.addTaxRule = async (data) => {
  const taxRule = await db.Tax_Rules.findOne({
    where: { ...data },
  });
  if (taxRule) throw new HTTPError("Tax Rule Already Exists!", 400);
  const result = await db.Tax_Rules.create({
    ...data,
  });
  return result;
};
exports.deleteTaxRule = async (id) => {
  const taxRule = JSON.parse(
    JSON.stringify(
      await db.Tax_Rules.findOne({
        where: {
          id,
        },
      })
    )
  );
  if (!taxRule) throw new NotFoundError("Tax Rule With Given Id is Not Found");
  const orders = JSON.parse(
    JSON.stringify(
      await db.Orders.findAll({
        where: {
          applicableTax: taxRule,
        },
      })
    )
  );
  if (orders.length > 0) {
    throw new HTTPError(
      "Tax Rule cannot be deleted since there are orders including it",
      400
    );
  }
  const result = await db.Tax_Rules.destroy({
    where: {
      id,
    },
  });
  return {
    message: "Tax Rule deleted successfully",
  };
};
exports.updateTaxRule = async (data, id) => {
  const taxRule = await db.Tax_Rules.findOne({
    where: {
      id,
    },
  });
  if (!taxRule) throw new NotFoundError("Tax Rule With Given Id is Not Found");
  await db.Tax_Rules.update(
    { ...data },
    {
      where: { id },
    }
  );
  return {
    message: "updated successfully",
  };
};
