const { Client } = require('pg')

const getConnection = async () => {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'brahian',
        password: 'ADMIN123',
        database: 'mystore'
    })
    
    await client.connect()

    return client
}

module.exports = getConnection
