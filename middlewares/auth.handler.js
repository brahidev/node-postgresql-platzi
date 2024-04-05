const boom = require('@hapi/boom');

const { config } = require('../config/config')

function checkApiKey(req, res, next){
    const apiKey = req.headers['api']

    // Check API
    if (apiKey === config.apiKey) {
        next()
    }

    next(boom.unauthorized())
}

function checkAdminRole(req, res, next){
    const user = req.user

    console.log('User Payload', req.user)

    // Check Role
    if (user.role === 'admin') {
        next()
    } else {
        next(boom.unauthorized())
    }
}

function checkRoles(...roles){
    return (req, res, next) => {
        const user = req.user
        if (roles.includes(user.role)) {
            next()
        } else {
            next(boom.unauthorized())
        }
    }
}

module.exports = { checkApiKey, checkAdminRole, checkRoles }