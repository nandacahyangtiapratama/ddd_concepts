const db = require('../../../../models')

class TransactionRepository {
  async createOrderCard(id_transaction, user_id, product_id, product_category_id, number, qty, total_price) {
    try {
      const result = await db.transaction.create(
        {
          id_transaction,
          user_id,
          product_id,
          product_category_id,
          number,
          qty,
          total_price,
          status: "ON_CART"
        }
      );
      return result
    } catch (error) {
      return error
    }
  }
  async createOrderProductBundling(id_transaction, user_id, product_id, product_category_id, qty, total_price) {
    try {
      const result = await db.transaction.create(
        {
          id_transaction,
          user_id,
          product_id,
          product_category_id,
          qty,
          total_price,
          status: "ON_CART"
        }
      );
      return result
    } catch (error) {
      return error
    }
  }
  async getDataUserByOrder(user_id) {
    try {
      const resultGetTransaction = await db.transaction.findAll({
        where: {
          user_id,
          status: "ON_CART",
          isDelete: false
        },
        attributes: [
          'id',
          'id_transaction',
          'product_id',
          ['product_category_id', 'productCategoryId'],
          ['total_price', 'price'],
          'number',
          'qty',
          'address_id',
          'status'
        ]
      });
      return resultGetTransaction;
    } catch (error) {
      return error;
    }
  }
  async getDataProductByUser(user_id, product_id) {
    try {
      const result = await db.transaction.findAll({
        where: {
          user_id,
          product_id,
          status: 'ON_CART',
          isDelete: false
        },
      });
      return result
    } catch (error) {
      return error
    }
  }
  async updateQuantity(user_id, product_id, qty, total_price) {
    try {
      const [record, created] = await db.transaction.update(
        {
          qty,
          total_price
        },
        {
          where: {
            user_id,
            product_id
          }, returning: true
        }
      );
      return created;
    } catch (error) {
      return error;
    }
  }
  async updateIsDelete(user_id, product_id, isDelete) {
    try {
      const [record, created] = await db.transaction.update(
        { isDelete },
        {
          where: {
            user_id,
            product_id
          }, returning: true
        }
      );
      return created;
    } catch (error) {
      return error;
    }
  }
  async updateIsDeleteCard(user_id, product_id, number, isDelete) {
    try {
      const [record, created] = await db.transaction.update(
        { isDelete },
        {
          where: {
            user_id,
            product_id,
            number
          },
          returning: true,
        }
      );
      return created;
    } catch (error) {
      return error;
    }
  }
}

module.exports = TransactionRepository;