import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('это маршрут продуктов') // http://localhost:3000/products
})

router.get('/101', (req, res) => {
  res.send('это маршрут продукта 101') // http://localhost:3000/product/101
})

router.get('/102', (req, res) => {
  res.send('это маршрут продукта 102') // http://localhost:3000/product/102
})

export default router
