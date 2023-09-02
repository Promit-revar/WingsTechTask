'use strict';
const {
  Model
} = require('sequelize');
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
  Discount_Rules.init({
    description: DataTypes.STRING,
    percentage: DataTypes.DOUBLE,
    amount: DataTypes.INTEGER,
    valid: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Discount_Rules',
  });
  return Discount_Rules;
};