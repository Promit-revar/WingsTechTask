"use strict";
const { Model } = require("sequelize");
const { MAX_TIMESTAMP } = require("../utils/constants");
module.exports = (sequelize, DataTypes) => {
  class Discount_Rules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Discount_Rules.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      description: DataTypes.STRING,
      percentage: { type: DataTypes.DOUBLE, defaultValue: 0.0 },
      amount: { type: DataTypes.INTEGER, defaultValue: 0 },
      valid_upto: { type: DataTypes.DATE, defaultValue: MAX_TIMESTAMP },
      valid: { type: DataTypes.BOOLEAN, defaultValue: true },
      productIds: DataTypes.ARRAY(DataTypes.STRING),
      category: DataTypes.ENUM(
        "kitchen",
        "gardern",
        "male accessory",
        "female accessory",
        "electronics",
        "all",
        "order"
      ),
    },
    {
      sequelize,
      modelName: "Discount_Rules",
    }
  );
  return Discount_Rules;
};
