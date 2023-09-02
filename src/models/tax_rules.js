'use strict';
const {
  Model
} = require('sequelize');
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
  Tax_Rules.init({
    country: DataTypes.STRING,
    GST: DataTypes.DOUBLE,
    state: DataTypes.STRING,
    SGST: DataTypes.DOUBLE,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tax_Rules',
  });
  return Tax_Rules;
};