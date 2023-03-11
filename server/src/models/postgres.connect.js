const { Pool } = require('pg')
const _var     = require('../global/var.js')

const config = {
	user: _var.PG_USER,
	host: _var.PG_HOST,
	database: _var.PG_DB,
	password: _var.PG_PASS
}

const pool = new Pool(config)

module.exports = { pool }