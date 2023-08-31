const { Sequelize } = require('sequelize')
const { config } = require('../config/config')
const setUpModels = require('../db/models')

// Encode USER and PASSWORD
const user = encodeURIComponent(config.dbUser)
const password = encodeURIComponent(config.dbPassword)
const URI = `postgres://${user}:${password}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: true
})

setUpModels(sequelize)

module.exports = sequelize