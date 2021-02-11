'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  transaction.init({
    id_transaction: DataTypes.UUID,
    user_id: DataTypes.INTEGER,
    payment_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    product_category_id: DataTypes.INTEGER,
    number: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    address_id: DataTypes.INTEGER,
    total_price: DataTypes.DOUBLE,
    status: DataTypes.STRING,
    isDelete: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};