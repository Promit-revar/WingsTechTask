'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Discount_Rules', [
      {
          "id": "13dfbda6-1818-45dd-bd28-4f64d3572f9e",
          "description": "get flat ruppess 300 off on all electronics",
          "percentage": 0,
          "amount": 300,
          "valid_upto": new Date(860000000000000),
          "valid": true,
          "productIds": [
              "f18ec585-b1e5-4f68-9d72-5f6ba7704ca7",
              "3c3d9003-ada2-46d4-a345-175f9dd33831"
          ],
          "category": "electronics",
          "createdAt": "2023-09-02T19:32:03.316Z",
          "updatedAt": "2023-09-02T19:32:03.316Z"
      },
      {
          "id": "f4ff2ee8-6322-4ef0-9959-9221dcab99ef",
          "description": "get 50% off on S22 electronics",
          "percentage": 0,
          "amount": 300,
          "valid_upto": new Date(860000000000000),
          "valid": true,
          "productIds": [
              "f18ec585-b1e5-4f68-9d72-5f6ba7704ca7",
              "f18ec585-b1e5-4f68-9d72-5f6ba7704ca7",
              "3c3d9003-ada2-46d4-a345-175f9dd33831"
          ],
          "category": "electronics",
          "createdAt": "2023-09-02T19:33:26.437Z",
          "updatedAt": "2023-09-02T19:33:26.437Z"
      },
      {
          "id": "19514f43-37ec-49c3-9ef2-a984194e39a4",
          "description": "get 50% off on S22 electronics",
          "percentage": 50,
          "amount": 0,
          "valid_upto": new Date(860000000000000),
          "valid": true,
          "productIds": [
              "f18ec585-b1e5-4f68-9d72-5f6ba7704ca7"
          ],
          "category": null,
          "createdAt": "2023-09-02T19:34:23.676Z",
          "updatedAt": "2023-09-02T19:34:23.676Z"
      },
      {
          "id": "7258e085-b42c-494b-b9df-f92384178468",
          "description": "get 20% off on all samsung products",
          "percentage": 20,
          "amount": 0,
          "valid_upto": new Date(860000000000000),
          "valid": true,
          "productIds": [
              "f18ec585-b1e5-4f68-9d72-5f6ba7704ca7"
          ],
          "category": null,
          "createdAt": "2023-09-02T19:35:19.467Z",
          "updatedAt": "2023-09-02T19:35:19.467Z"
      }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Discount_Rules', null, {});

  }
};
