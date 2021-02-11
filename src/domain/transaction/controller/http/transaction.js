var express = require('express');
var router = express.Router();
const transactionController = require('../transactionController');

const transactionControllerInit = new transactionController();

router.post(
  '/cart',
  transactionControllerInit.createOrder
);

router.get(
  '/cart',
  transactionControllerInit.getDataOrder
)

router.delete(
  '/cart',
  transactionControllerInit.updateDataOrder
)

module.exports = router;
