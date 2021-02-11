const productRepository = require('../../product/repository/productRepository');

class ProductUseCase {
  async getDataProduct(product_id){
    try{
      const productRepositoryInit = new productRepository();
      const resultGetProduct = await productRepositoryInit.GetDataByProductId(product_id)
      if (resultGetProduct){
        return {
          resultGetProduct
        }
      }
    }catch(error){
      return error
    }
  }

}

module.exports = ProductUseCase