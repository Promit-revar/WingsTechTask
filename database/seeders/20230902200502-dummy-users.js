'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Auths', [ {
      "id": 1,
      "email": "test@gmail.com",
      "password": "$2b$10$ytIK77rf9PF6QwEWzBnp6eFs4TPGtNnZHvWHtbmtFGlttWkord1eu",
      "role": "admin",
      "updatedAt": "2023-09-02T20:07:59.520Z",
      "createdAt": "2023-09-02T20:07:59.520Z"
  },
  {
    "id": 2,
    "email": "test1@gmail.com",
    "password": "$2b$10$nu2.FvORe9CPQtFEILNGI.vHXIwVKc7lraLqfmGxuI4eIVO7Qtd4u",
    "role": "user",
    "updatedAt": "2023-09-02T20:07:59.520Z",
    "createdAt": "2023-09-02T20:07:59.520Z"
}], {});
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('Auths', null, {});
     
  }
};
