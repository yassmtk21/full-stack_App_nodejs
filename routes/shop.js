const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/product-list", shopController.getProducts);

router.get("/cart", shopController.getCart);

router.get("/checkout", shopController.getChekout);

module.exports = router;
