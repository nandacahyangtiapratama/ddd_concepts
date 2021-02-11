const transactionService = require('../service/transactionUseCase')

class TransactionController {
  async createOrder(req, res) {
    const { user_id, product_id, qty, number, ktp, kk } = req.body;
    try {
      const transactionServiceInit = new transactionService();
      const resultCreate = await transactionServiceInit.createOrder(user_id,product_id, qty, number, ktp, kk);
      if (resultCreate) {
        res.json({
          result: resultCreate
        })
      } else {
        res.json({
          message: "Error"
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  async getDataOrder(req, res) {
    const user_id = req.body.user_id;
    try {
      const transactionServiceInit = new transactionService();
      const resultGetOrder = await transactionServiceInit.getDataOrder(user_id);
      if (resultGetOrder) {
        res.json({
          result: resultGetOrder
        })
      }
    } catch (error) {
      res.json({
        result: error
      })
    }
  }
  async updateDataOrder(req, res) {
    const { user_id, product_id, qty, number } = req.body;
    try {
      const transactionServiceInit = new transactionService();
      const resultUpdateOrder = await transactionServiceInit.updateDataOrder(user_id, product_id, qty, number)
      if(resultUpdateOrder){
        res.json({
          result: resultUpdateOrder
        })
      }
    } catch (error) {
      res.json({
        result: error
      })
    }
  }
}

module.exports = TransactionController;