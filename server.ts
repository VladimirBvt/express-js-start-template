import express from 'express'
import swaggerUi from 'swagger-ui-express'
import usersRoute from './routes/users'
import productsRoute from './routes/products'
import specs from './docs/output.json'

const app = express()
const PORT: number = Number(process.env.PORT) || 3001

app.get('/', (req, res) => {
  res.send('Welcome to typescript backend!!')
})

app.use('/users', usersRoute)
app.use('/products', productsRoute)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.listen(PORT, () => {
  console.log(
    'The application is listening ' + 'on port http://localhost:' + PORT
  )
})
