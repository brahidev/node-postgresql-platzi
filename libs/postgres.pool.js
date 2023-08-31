const { Pool } = require('pg')
const { config } = require('../config/config')

// Encode USER and PASSWORD
const user = encodeURIComponent(config.dbUser)
const password = encodeURIComponent(config.dbPassword)
const URI = `postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const pool = new Pool({ connectionString: URI })

module.exports = pool
