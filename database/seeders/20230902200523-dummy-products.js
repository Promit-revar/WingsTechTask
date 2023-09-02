'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Products', [{
        "id": "f18ec585-b1e5-4f68-9d72-5f6ba7704ca7",
        "name": "S22 Ultra",
        "description": "22inch led display ,glossy black, 128 gb ram ",
        "image": null,
        "price": 20000,
        "category": "electronics",
        "createdAt": "2023-09-02T19:20:48.684Z",
        "updatedAt": "2023-09-02T19:20:48.684Z"
    },
    {
        "id": "3c3d9003-ada2-46d4-a345-175f9dd33831",
        "name": "A22 Ultra",
        "description": "22inch led display ,glossy black, 128 gb ram ",
        "image": null,
        "price": 10000,
        "category": "electronics",
        "createdAt": "2023-09-02T19:21:04.378Z",
        "updatedAt": "2023-09-02T19:21:04.378Z"
    },
    {
        "id": "c5c7e803-f29f-451f-8a76-3eda0119a943",
        "name": "Kitchen Set",
        "description": "2 knives and chopping board with 5 miduim size vessels ",
        "image": null,
        "price": 1000,
        "category": "kitchen",
        "createdAt": "2023-09-02T19:23:05.361Z",
        "updatedAt": "2023-09-02T19:23:05.361Z"
    },
    {
        "id": "32132d64-2756-4d7f-b9b5-9099c8101685",
        "name": "Kitchen Set 2",
        "description": "2 knives and with 5 miduim size vessels ",
        "image": null,
        "price": 800,
        "category": "kitchen",
        "createdAt": "2023-09-02T19:23:30.378Z",
        "updatedAt": "2023-09-02T19:23:30.378Z"
    }
], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Products', null, {});
     
  }
};
