require('dotenv').config()

// SERVER
const PORT = process.env.PORT
const URL  = process.env.URL

// ROUTES
const ROOT   = process.env.ROOT
const GETPRO = process.env.GETPRO
const NEWPRO = process.env.NEWPRO
const GETPRD = process.env.GETPRD

// POSTGRES
const PG_USER = process.env.PG_USER
const PG_HOST = process.env.PG_HOST
const PG_DB   = process.env.PG_NAME
const PG_PASS = process.env.PG_PASS

module.exports = {
	PORT, URL,
	ROOT, GETPRO, NEWPRO, GETPRD,
	PG_USER, PG_HOST, PG_DB, PG_PASS
}