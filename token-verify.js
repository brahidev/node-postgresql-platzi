const jsonwebtoken = require('jsonwebtoken')
const secret = 'mySecret'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNTI3OTg5N30.27ABdtl16Cy24u4quoEIfpRRT1H_xlpghFu8YltLXEU'

const verifyToken = (token, secret) => {
    return jsonwebtoken.verify(token, secret)
}

const payload = verifyToken(token, secret)
console.log('Payload', payload)
