const { CustomAPIError } = require('../errors')
const { BadRequestError } = require('../errors')
const { UnauthenticatedError } = require('../errors')
const jwt = require('jsonwebtoken')
require('dotenv').config()


const login = async (req,res) => {
    const { username, password } = req.body
    if(!username || !password){
        throw new BadRequestError('Please provide email and password')
    }
    //creating dummy id
    const id = new Date().getDate()

    //jwt.sign({payload}, secret, {options})
    const token = jwt.sign({id,username}, process.env.JWT_SECRET, {expiresIn:'30d'})

    res.status(201).json({msg:'User created', token:token})
}

const dashboard = async (req,res) => {
    const { username } = req.user

    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({
        msg: `Hello ${username}`, 
        secret: `Your authorized data is ${luckyNumber}`
    })
    // const authHeader = req.headers.authorization
    // //console.log(authHeader)

    // if(!authHeader || !authHeader.startsWith('Bearer')){
    //     throw new CustomAPIError('Token not provided', 401)
    // }
    // const token = authHeader.split(' ')[1]
    // //console.log(token)
    // try {
    //     const decode = jwt.verify(token,process.env.JWT_SECRET)
    //     //console.log(decode)
    //     const luckyNumber = Math.floor(Math.random()*100)
    //     res.status(200).json({
    //         msg: `Hello ${decode.username }`, 
    //         secret: `Your authorized data is ${luckyNumber}`
    //     })
    // } catch (error) {
    //     throw new CustomAPIError('Token not provided', 401)
    // }

}

module.exports = {
    login,
    dashboard
}