const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  productName: {
    type: String,
    require: true,
  },
  productDescription: {
    type: String,
  },
  productCode: {
    type: String,
    default: "Product-XXX",
  },
  productPrice: {
    type: Number,
    default: 0,
    require: true,
  },
  productDiscount: {
    type: Number,
    default: 0,
  },
  productColor: {
    type: String,
  },
  productQuantity: {
    type: Number,
    default: 0,
    require: true,
  },
  productType: {
    type: String,
  },
  productImage: {
    type: String,
  },
  productNote: {
    type: String,
  },
  categories: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
