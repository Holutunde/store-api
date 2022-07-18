const express = require('express')
const router = express.Router()

const {
  getAllProducts,
  getAllQuery,
} = require('../../server/controllers/product')

router.route('/').get(getAllProducts)
router.route('/query').get(getAllQuery)

module.exports = router
