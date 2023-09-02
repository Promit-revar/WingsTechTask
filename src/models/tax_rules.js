"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tax_Rules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tax_Rules.init(
    {
      id:{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      country: DataTypes.STRING,
      GST: DataTypes.DOUBLE,
      state: DataTypes.STRING,
      SGST: DataTypes.DOUBLE,
      category: DataTypes.ENUM(
        "kitchen",
        "gardern",
        "male accessory",
        "female accessory",
        "electronics",
        "all"
      ),
    },
    {
      sequelize,
      modelName: "Tax_Rules",
    }
  );
  return Tax_Rules;
};
