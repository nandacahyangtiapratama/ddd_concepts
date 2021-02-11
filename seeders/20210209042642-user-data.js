'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert(
     'users',
     [{
      address_id: 1,
      name: "nanda",
      email: "nanda@mail.com",
      ktp: "123456",
      kk: "123456",
      password: "nanda",
      isValid: true,
      createdAt: new Date,
      updatedAt: new Date
     },{
      address_id: 2,
      name: "pratama",
      email: "pratama@mail.com",
      ktp: "123456",
      kk: "123456",
      password: "pratama",
      isValid: true,
      createdAt: new Date,
      updatedAt: new Date
     }]
   )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      'users',
      null, {}
    )
  }
};
