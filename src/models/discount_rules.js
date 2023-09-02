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
    id:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    description: DataTypes.STRING,
    percentage: DataTypes.DOUBLE,
    amount: DataTypes.INTEGER,
    valid_upto: DataTypes.DATE,
    valid: {type: DataTypes.BOOLEAN, defaultValue: true},
    productIds: DataTypes.ARRAY(DataTypes.STRING),
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Discount_Rules',
  });
  return Discount_Rules;
};