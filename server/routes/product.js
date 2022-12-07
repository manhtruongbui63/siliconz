const express = require("express");
// const router = express.Router();
const router = require("express-promise-router")();
const ProductController = require("../controllers/product");
const { validateParam, schemas } = require("../helpers/routerHelpers");

router
  .route("/")
  .get(ProductController.getAll)
  .post(ProductController.uploadImg, ProductController.postNewProduct);

router
  .route("/:productID")
  .get(
    validateParam(schemas.idSchema, "productID"),
    ProductController.getProduct
  );

module.exports = router;
