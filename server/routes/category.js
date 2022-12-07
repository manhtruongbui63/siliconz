const express = require("express");
// const router = express.Router();
const router = require("express-promise-router")();
const CategoryController = require("../controllers/category");
const { validateParam, schemas } = require("../helpers/routerHelpers");

router.route("/").get(CategoryController.getAll).post(CategoryController.postNewCategory);

module.exports = router;
