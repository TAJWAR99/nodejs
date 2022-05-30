const { CustomAPIError } = require('../errors')
const { UnauthenticatedError } = require('../errors')

const jwt = require('jsonwebtoken')
require('dotenv').config()

const authenticationMiddleware = (req,res,next)=> {
    const authHeader = req.headers.authorization
    //console.log(authHeader)

    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnauthenticatedError('No token provided')
    }
    const token = authHeader.split(' ')[1]
    //console.log(token)
    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        const { id, username } = decode
        //console.log(decode)
        req.user = { id, username}
        next()
        
    } catch (error) {
        throw new UnauthenticatedError('Not authorized to access this route')
    }
}

module.exports = authenticationMiddleware