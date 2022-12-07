const Category = require("../models/Category");

const index = async (req, res, next) => {
  const categories = await Category.find({});
  return res.status(200).json({ categories });
};

const create = async (req, res, next) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    return res.status(201).json({ category: newCategory });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll: index,
  postNewCategory: create,
};
