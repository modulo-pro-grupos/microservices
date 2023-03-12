const { Router } = require('express')
const router     = Router()
const _var       = require('../global/var.js')
const controller = require('../controllers/product.controller.js')

router.get(_var.ROOT, (req, res) => {
	res.send('Hello World')
})

router.get(_var.GETPRO, async (req, res) => {
	const { name } = req.params
	const product  = await controller.getProduct(name)
	res.status(product.code).json(product)
})

router.get(_var.GETPRD, async (req, res) => {
	const product  = await controller.getProducts()
	res.status(product.code).json(product)
})

router.post(_var.NEWPRO, async (req, res) => {
	const { name, department, amount, expiration, price } = req.body
	let prod = await controller.getProduct(name)
	if (prod.status) res.status(500).json({ message: "Product already registered", status: false })
	else if(!prod.status){
		prod = await controller.insertProduct(name, department, amount, expiration, price)
		res.status(prod.code).json(prod)
	} 
})

module.exports = router