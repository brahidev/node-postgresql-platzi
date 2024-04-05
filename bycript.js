const bcrypt = require('bcrypt')

async function hashPassword() {
    const password = '01235678'
    const hash = await bcrypt.hash(password, 10)

    console.log('Hash', hash)
}

async function verifyPassword() {
    const password = '01235678'
    const hash = await bcrypt.compare(password, '$2b$10$TZf1OGMZluKnMonS.8R.qu2mZiHx6pTgRGnT.v.oEflaG0PwBbUtu')

    console.log('Verify', hash)
}

hashPassword()
verifyPassword()