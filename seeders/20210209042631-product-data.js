'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'products',
      [{
        product_category_id: 1,
        name: "Ganti Kartu",
        price: 0,
        sub_product: "Ganti Kartu",
        description: "Ganti Kartu",
        poster: "ganti-kartu.png",
        createdAt: new Date,
        updatedAt: new Date
      },{
        product_category_id: 2,
        name: "Simpati 10rb",
        price: 10000,
        sub_product: "Simpati",
        description: "Perdana Simpati dengan pulsa awal 10 rb",
        poster: "simpati-10rb.png",
        createdAt: new Date,
        updatedAt: new Date
      },{
        product_category_id: 2,
        name: "Loop 10rb",
        price: 10000,
        sub_product: "Loop",
        description: "Perdana Loop dengan pulsa awal 10 rb",
        poster: "loop-10rb.png",
        createdAt: new Date,
        updatedAt: new Date
      },{
        product_category_id: 2,
        name: "AS 10rb",
        price: 10000,
        sub_product: "AS",
        description: "Perdana AS dengan pulsa awal 10 rb",
        poster: "as-10rb.png",
        createdAt: new Date,
        updatedAt: new Date
      },{
        product_category_id: 3,
        name: "Halo Play Starter 110rb",
        price: 110000,
        sub_product: "Halo Play",
        description: "Halo Play Starter dengan benefit: 5 GB Internet semua jaringan, 10 GB Internet Entertainment, 50 menit dan 100 SMS ke sesama Telkomsel, 20 menit telepon ke semua operator, sudah termasuk berlangganan HBO GO, VIU Premium, VIDIO Gold.",
        poster: "halo-110rb.png",
        createdAt: new Date,
        updatedAt: new Date
      },{
        product_category_id: 4,
        name: "Bundling Galaxy S21+ 5G 8/256GB",
        price: 16999000,
        sub_product: "Smartphone",
        description: "Bundling Galaxy S21+ 5G 8/256GB + Kartu Halo",
        poster: "Bundling_Galaxy_S21_5G_8_256GB.jpg",
        createdAt: new Date,
        updatedAt: new Date
      }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      'products',
      null, {});
  }
};
