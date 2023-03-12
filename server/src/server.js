const express = require('express')
const app     = express()
const _var    = require('./global/var.js')
const product = require('./routes/product.routes.js')
const cors    = require('cors')

app.use(express.json())
app.use(cors({
	origin: 'http://localhost:3000',
}))
app.use(product)

app.listen(_var.PORT, (err) => {
	if(err) throw err
	console.log(`Server running on ${_var.URL}${_var.PORT}`)
})

