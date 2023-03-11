const express = require('express')
const app     = express()
const _var    = require('./global/var.js')
const product = require('./routes/product.routes.js')

app.use(express.json())
app.use(product)

app.listen(_var.PORT, (err) => {
	if(err) throw err
	console.log(`Server running on ${_var.URL}${_var.PORT}`)
})

