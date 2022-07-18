const Product = require('../models/productSchema')

const getAllProducts = async (req, res) => {
  const products = await Product.find({}).sort('price')
  res.status(200).json({ products, nbHits: products.length })
}
const getAllQuery = (req, res) => {}

module.exports = {
  getAllProducts,
  getAllQuery,
}
