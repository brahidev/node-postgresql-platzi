const jsonwebtoken = require('jsonwebtoken')
const secret = 'mySecret'
const payload = {
    sub: 1,
    role: 'admin'
}

const signToken = (payload, secret) => {
    return jsonwebtoken.sign(payload, secret)
}

const token = signToken(payload, secret)

console.log('Token', token)