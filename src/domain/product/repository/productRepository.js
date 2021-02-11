const db = require('../../../../models')

class ProductRepository {
  async GetDataByProductId(id) {
    try {
      const getDataByProductId = await db.product.findByPk(id);

      // getDataByProductId.dataValues.poster = getDataByProductId.dataValues
      //   .poster
      //   ? imageHostUrl + getDataByProductId.dataValues.poster + imageHostQuery
      //   : null;

      return getDataByProductId;
    } catch (error) {
      return error;
    }
  }
}

module.exports = ProductRepository