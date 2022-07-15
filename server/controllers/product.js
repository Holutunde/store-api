const getAllProductsStatic = (req, res) => {
  res.send('connected')
}
const getAllProducts = (req, res) => {}

module.exports = {
  getAllProducts,
  getAllProductsStatic,
}
