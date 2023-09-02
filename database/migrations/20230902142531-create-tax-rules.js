"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tax_Rules", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        defaultValue: Sequelize.UUIDV4,
      },
      country: {
        type: Sequelize.STRING,
      },
      GST: {
        type: Sequelize.DOUBLE,
      },
      state: {
        type: Sequelize.STRING,
      },
      SGST: {
        type: Sequelize.DOUBLE,
      },
      category: {
        type: Sequelize.ENUM(
          "kitchen",
          "gardern",
          "male accessory",
          "female accessory",
          "electronics",
          "all"
        ),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tax_Rules");
  },
};
