const Cart = require("../models/Cart");
const Product = require("../models/Product");

const carts = async () => {
  const carts = await Cart.find().populate({
    path: "items.productID",
    select: "productName productPrice",
  });
  return carts[0];
};

const addItem = async (payload) => {
  const newItem = await Cart.create(payload);
  return newItem;
};

const addCart = async (req, res, next) => {
  const { productID } = req.params;
  let product = await Product.findById(productID);
  const quantity = Number.parseInt(req.params.quantity);
  const userID = req.user._id;
  const cart = await carts();
  const cartUser = await Cart.findOne({ userID });

  if (cartUser) {
    const index = cart.items.findIndex(
      (item) => item.productID._id == productID
    );

    if (index !== -1) {
      const p = cart.items[index];
      p.quantity += quantity;
      p.price = product.productPrice;
      p.total = p.price * p.quantity;
      cart.subTotal = cart.items
        .map((item) => item.total)
        .reduce((acc, next) => acc + next);
    } else {
      cart.items.push({
        productID: productID,
        quantity: quantity,
        price: product.productPrice,
        total: quantity * product.productPrice,
      });
      cart.subTotal = cart.items
        .map((item) => item.total)
        .reduce((acc, next) => acc + next);
    }

    cart.save();
  } else {
    let cartData = {
      userID: userID,
      items: [
        {
          productID: productID,
          quantity: quantity,
          price: product.productPrice,
          total: quantity * product.productPrice,
        },
      ],
      subTotal: quantity * product.productPrice,
    };
    cart = addItem(cartData);
  }

  return res.status(201).json({ success: true });
};

const getAllCart = async (req, res, next) => {
  const userID = req.user._id;
  const cartUser = await Cart.findOne({ userID });
  return res.status(200).json({ data: cartUser, status: true });
};

module.exports = {
  addCart: addCart,
  getAllCart: getAllCart,
};
