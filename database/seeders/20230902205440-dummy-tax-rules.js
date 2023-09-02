'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Tax_Rules', [
      {
        "id": 1,
        "country": "India",
        "state": "Gujarat",
        "SGST": 18,
        "GST": 18,
        "updatedAt": "2023-09-02T20:53:22.113Z",
        "createdAt": "2023-09-02T20:53:22.113Z",
        "category": null
    }
     ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Tax_Rules', null, {});

  }
};
