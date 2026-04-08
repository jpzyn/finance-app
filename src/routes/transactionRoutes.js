const express = require('express');
const controller = require('../controllers/transactionController');

const router = express.Router();

router.get("/", controller.list);
router.post("/", controller.create);
router.get("/balance", controller.balance);

module.exports = router;