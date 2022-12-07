const express = require("express");
const router = require("express-promise-router")();
const CartController = require("../controllers/cart");
const { validateParam, schemas } = require("../helpers/routerHelpers");
const passport = require("passport");
const passportConfig = require("../middlewares/passport");

router
  .route("/add-to-cart/id=:productID/quantity=:quantity")
  .get(
    passport.authenticate("jwt", { session: false }),
    validateParam(schemas.idSchema, "productID"),
    CartController.addCart
  );
router
  .route("/")
  .get(
    passport.authenticate("jwt", { session: false }),
    CartController.getAllCart
  );

module.exports = router;
