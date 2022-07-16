require('dotenv').config()

const connectDB = require('./database/db')
const Product = require('./server/models/productSchema')

const Products = require('./products')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await Product.deleteMany()
    await Product.create(Products)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
