const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  productID: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    default: 1,
  },
  price: {
    type: Number,
  },
  total: {
    type: Number,
    default: 0,
  },
});

const CartSchema = new Schema({
  userID: {
    type: String,
  },
  subTotal: {
    type: Number,
    default: 0,
  },
  items: [ItemSchema],
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
