'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Discount_Rules', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        defaultValue: Sequelize.UUIDV4,
      },
      description: {
        type: Sequelize.STRING
      },
      percentage: {
        type: Sequelize.DOUBLE
      },
      amount: {
        type: Sequelize.INTEGER
      },
      valid_upto: {
        type: Sequelize.DATE
      },
      valid: {
        type: Sequelize.BOOLEAN
      },
      productIds: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      category: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Discount_Rules');
  }
};