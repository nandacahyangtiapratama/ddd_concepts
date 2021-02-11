'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'transactions',
      [{
        id_transaction: "7d211d9a-a50e-4efc-8e48-4a00b6a7826a",
        user_id: 1,
        payment_id: 1,
        product_id: 1,
        product_category_id: 1,
        number: "08112348007",
        qty: 1,
        address_id: 1,
        total_price: 10000,
        status: "ON_CART",
        isDelete:false,
        createdAt: new Date,
        updatedAt: new Date
      }, {
        id_transaction: "7d211d9a-a50e-4efc-8e48-4a00b6a7826a",
        user_id: 1,
        payment_id: 1,
        product_id: 1,
        product_category_id: 1,
        number: "082217842464",
        qty: 1,
        address_id: 1,
        total_price: 10000,
        status: "ON_CART",
        isDelete:false,
        createdAt: new Date,
        updatedAt: new Date
      }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      'transactions',
      null,
      {}
    );
  }
};
