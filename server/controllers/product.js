const Category = require("../models/Category");
const Product = require("../models/Product");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const uploadImg = multer({ storage: storage }).single("image");

const index = async (req, res, next) => {
  const products = await Product.find({});
  return res.status(200).json({ products });
};

const create = async (req, res, next) => {
  try {
    const categories = await Category.findById(req.body.categories);
    const product = req.body;
    delete product.categories;
    product.categories = categories._id;
    product.productImage = req.file.path;

    const newProduct = new Product(product);
    await newProduct.save();

    categories.products.push(newProduct._id);
    await categories.save();
    return res.status(201).json({ product: newProduct });
  } catch (error) {
    next(error);
  }
};
const getProduct = async (req, res, next) => {
  const { productID } = req.params;
  const product = await Product.findById(productID);
  return res.status(200).json({ product });
};

module.exports = {
  getAll: index,
  postNewProduct: create,
  uploadImg: uploadImg,
  getProduct: getProduct,
};
