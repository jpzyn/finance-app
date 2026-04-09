const express = require("express");
const controller = require("../controllers/cardController");

const router = express.Router();

router.post("/", controller.create);
router.get("/", controller.list);

module.exports = router;