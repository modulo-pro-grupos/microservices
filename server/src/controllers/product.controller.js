const { pool } = require('../models/postgres.connect.js')

let msg = {
	status: false,
	message: "Error retrieving database",
	data: [],
	code: 500
}

const getProduct = async (name) => {
	let sql  = `SELECT COUNT(id) FROM products WHERE name = '${name}';`
	let prod = await pool.query(sql)
	console.log(prod)
	if (prod.rows[0].count == 1) {
		msg = {
			status: true,
			message: "Product found Succesfully",
			data: prod.rows,
			code: 200
		}
	}else{
		msg = {
			status: false,
			message: "Product not found",
			code: 200
		}
	} 
	return msg
}

const insertProduct = async (name, department, amount, expiration, price) => {
	let sql = `INSERT INTO products (name, department, amount, expiration, price) VALUES ('${name}', '${department}', '${amount}', '${expiration}', '${price}');`
	const prod = await pool.query(sql)
	if (prod.rowCount > 0) {
		msg = {
			status: true,
			message: "Product registered succesfully",
			code: 200
		}
	}else{
		msg = {
			status: false,
			message: "Product not registered",
			code: 500
		}
	}
	return msg
}

module.exports = {
	getProduct, insertProduct
}