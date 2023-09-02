"use strict";
const { Model, DOUBLE } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      country: DataTypes.STRING,
      state: DataTypes.STRING,
      productIds: DataTypes.ARRAY(DataTypes.JSON),
      applicableTax: DataTypes.JSON,
      userId: DataTypes.STRING,
      overAllDiscount: { type: DataTypes.DOUBLE, defaultValue: 0.0 },
      amount: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
