const transactionRepository = require('../repository/transactionRepository');
const userUseCase = require('../../user/service/userUseCase');
const productUseCase = require('../../product/service/productUseCase');
const ProductUseCase = require('../../product/service/productUseCase');
const { v4: uuidv4 } = require('uuid');

class TransactionUseCase {
  async createOrder(user_id, product_id, qty, number, ktp, kk) {
    try {
      const transactionRepositoryInit = new transactionRepository();
      const userUseCaseInit = new userUseCase();
      const productUseCaseInit = new ProductUseCase();
      const dataTransaction = await transactionRepositoryInit.getDataUserByOrder(user_id);
      if (dataTransaction.length > 0) {
        var id_transaction = dataTransaction[0].id_transaction
        try {
          const dataUser = await userUseCaseInit.getDataUser(user_id);
          const dataProduct = await productUseCaseInit.getDataProduct(product_id);
          const numberKTP = dataUser.resultGetUser.dataValues.ktp;
          const numberKK = dataUser.resultGetUser.dataValues.kk;
          const product_category_id = dataProduct.resultGetProduct.dataValues.product_category_id;
          const price = dataProduct.resultGetProduct.dataValues.price;
          const total_price = qty * price;
          if ((ktp == numberKTP) && (kk == numberKK) && (number != null)) {
            const responData = await transactionRepositoryInit.createOrderCard(
              id_transaction,
              user_id,
              product_id,
              product_category_id,
              number,
              qty,
              total_price
            );
            if (responData) {
              return {
                id_transaction
              }
            } else {
              return {
                message: "Error Get Respon after Create Data"
              }
            }
          } else if (((ktp == null) && (kk == null)) && (number == null)) {
            const responData = await transactionRepositoryInit.createOrderProductBundling(
              id_transaction,
              user_id,
              product_id,
              product_category_id,
              qty,
              total_price
            );
            if (responData) {
              return {
                id_transaction
              }
            } else {
              return {
                message: "Error Get Respon after Create Data"
              }
            }
          } else if (((ktp == null) && (kk == null)) && (number != null)) {
            const responData = await transactionRepositoryInit.createOrderCard(
              id_transaction,
              user_id,
              product_id,
              product_category_id,
              number,
              qty,
              total_price
            );
            if (responData) {
              return {
                id_transaction
              }
            } else {
              return {
                message: "Error Get Respon after Create Data"
              }
            }
          } else {
            return {
              message: "KTP and KK Not Valid"
            }
          }
        } catch (error) {
          return {
            message: "Error Get Respon after Create Data"
          }
        }
      } else {
        var id_transaction = uuidv4();
        try {
          const dataUser = await userUseCaseInit.getDataUser(user_id);
          const dataProduct = await productUseCaseInit.getDataProduct(product_id);
          const numberKTP = dataUser.resultGetUser.dataValues.ktp;
          const numberKK = dataUser.resultGetUser.dataValues.kk;
          const product_category_id = dataProduct.resultGetProduct.dataValues.product_category_id;
          const price = dataProduct.resultGetProduct.dataValues.price;
          const total_price = qty * price
          if ((ktp == numberKTP) && (kk == numberKK) && (number != null)) {
            const responData = await transactionRepositoryInit.createOrderCard(
              id_transaction,
              user_id,
              product_id,
              product_category_id,
              number,
              qty,
              total_price
            );
            if (responData) {
              return {
                id_transaction
              }
            } else {
              return {
                message: "Error Get Respon after Create Data"
              }
            }
          } else if (((ktp == null) && (kk == null)) && (number == null)) {
            const responData = await transactionRepositoryInit.createOrderProductBundling(
              id_transaction,
              user_id,
              product_id,
              product_category_id,
              qty,
              total_price
            );
            if (responData) {
              return {
                id_transaction
              }
              return;
            } else {
              return {
                message: "Error Get Respon after Create Data"
              }
            }
          } else if (((ktp == null) && (kk == null)) && (number != null)) {
            const responData = await transactionRepositoryInit.createOrderCard(
              id_transaction,
              user_id,
              product_id,
              product_category_id,
              number,
              qty,
              total_price
            );
            if (responData) {
              return {
                id_transaction
              }
            } else {
              return {
                message: "Error Get Respon after Create Data"
              }
            }
          } else {
            return {
              message: "KTP and KK Not Valid"
            }
          }
        } catch (error) {
          return {
            message: "Error Get Respon after Create Data"
          }
        }
      }
    } catch (error) {
      return {
        message: "Error Get Data"
      }
    }
  }
  async getDataOrder(user_id) {
    try {
      const transactionRepositoryInit = new transactionRepository();
      const userUseCaseInit = new userUseCase();
      const productUseCaseInit = new productUseCase();
      const dataOrder = await transactionRepositoryInit.getDataUserByOrder(user_id);
      if (dataOrder.length > 0) {
        const id_transaction = dataOrder[0].id_transaction;
        const status = dataOrder[0].status;
        const addressId = dataOrder[0].address_id;
        const dataAddress = await userUseCaseInit.getDataUser(addressId);
        var totalPrice = 0
        const keyDataOrder = Object.keys(dataOrder).length;
        for (let i = 0; i < keyDataOrder; i++) {
          var productCategoryId = dataOrder[i].dataValues["productCategoryId"];
          if (productCategoryId == 1) {
            var productId = dataOrder[i].product_id;
            var dataProduct = await productUseCaseInit.getDataProduct(productId)
            var dataUser = await userUseCaseInit.getDataUser(user_id)
            dataOrder[i].dataValues["name"] = dataProduct.resultGetProduct.dataValues.name;
            dataOrder[i].dataValues["kk"] = dataUser.resultGetUser.dataValues.kk;
            dataOrder[i].dataValues["ktp"] = dataUser.resultGetUser.dataValues.ktp;
            delete dataOrder[i].dataValues["id_transaction"];
            delete dataOrder[i].dataValues['address_id'];
            delete dataOrder[i].dataValues['status'];
            delete dataOrder[i].dataValues["qty"];
            totalPrice += dataOrder[i].dataValues.price
          } else if (productCategoryId == 4) {
            var productId = dataOrder[i].product_id;
            var dataProduct = await productUseCaseInit.getDataProduct(productId)
            dataOrder[i].dataValues["name"] = dataProduct.resultGetProduct.dataValues.name;
            dataOrder[i].dataValues["subProduct"] = dataProduct.resultGetProduct.dataValues.sub_product;
            dataOrder[i].dataValues["description"] = dataProduct.resultGetProduct.dataValues.description;
            dataOrder[i].dataValues["poster"] = dataProduct.resultGetProduct.dataValues.poster;
            delete dataOrder[i].dataValues["id_transaction"];
            delete dataOrder[i].dataValues['address_id'];
            delete dataOrder[i].dataValues['status'];
            delete dataOrder[i].dataValues["number"];
            totalPrice += dataOrder[i].dataValues.price
          } else {
            var productId = dataOrder[i].product_id;
            var dataProduct = await productUseCaseInit.getDataProduct(productId)
            dataOrder[i].dataValues["name"] = dataProduct.resultGetProduct.dataValues.name;
            dataOrder[i].dataValues["subProduct"] = dataProduct.resultGetProduct.dataValues.sub_product;
            dataOrder[i].dataValues["description"] = dataProduct.resultGetProduct.dataValues.description;
            dataOrder[i].dataValues["poster"] = dataProduct.resultGetProduct.dataValues.poster;
            delete dataOrder[i].dataValues["id_transaction"];
            delete dataOrder[i].dataValues['address_id'];
            delete dataOrder[i].dataValues['status'];
            totalPrice += dataOrder[i].dataValues.price
          }
        }
        return {
          id_transaction,
          product: dataOrder,
          address: dataAddress,
          "shipmentPrice": 10000,
          "totalPrice": totalPrice,
          "totalItem": keyDataOrder,
          status
        }
      } else {
        return {
          code: 400,
          message: "Data Not Found"
        };
      }
    } catch (error) {
      return error
    }
  }
  async updateDataOrder(user_id, product_id, qty, number) {
    try {
      const transactionRepositoryInit = new transactionRepository();
      const productUseCaseInit = new productUseCase();
      const dataTransaction = await transactionRepositoryInit.getDataProductByUser(user_id, product_id);
      const dataProduct = await productUseCaseInit.getDataProduct(product_id)
      const idTransaction = dataTransaction[0].id_transaction;
      const price = dataProduct.resultGetProduct.dataValues.price;
      const total_price = qty * price;
      if (dataTransaction.length > 0) {
        if (qty < 1) {
          const productCategoryId = dataTransaction[0].product_category_id
          const isDelete = true;
          if (productCategoryId == 1) {
            const responseDelete = await transactionRepositoryInit.updateIsDeleteCard(user_id, product_id, number, isDelete);
            if (responseDelete) {
              return {
                code: 200,
                message: "Data is Deleted"
              }
            } else {
              return {
                code: 400,
                message: "Data Not Found"
              }
            }
          } else {
            const responseDelete = await transactionRepositoryInit.updateIsDelete(user_id, product_id, isDelete);
            if (responseDelete) {
              return {
                code: 200,
                message: "Data is Deleted"
              }
            } else {
              return {
                code: 400,
                message: "Data Not Found"
              }
            }
          }
        } else {
          const responseUpdate = await transactionRepositoryInit.updateQuantity(user_id, product_id, qty, total_price);
          if (responseUpdate) {
            return {
              idTransaction
            }
          } else {
            return {
              idTransaction
            }
          }
        }
      } else {
        return {
          code: 400,
          message: "Data Not Found"
        }
      }
    } catch (error) {
      return {
        code: 400,
        message: "Data Not Found"
      }
    }
  }
}

module.exports = TransactionUseCase;