const { CustomAPIError } = require('../errors')
const { StatusCodes} = require('http-status-codes')

const errorHandlerMiddleware = (err,req,res,next)=> {
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.msg || 'Something went wrong'
    }
    // if(err instanceof CustomAPIError){
    //     return res.status(err.statusCode).json({msg:err.message})
    // }
    if(err.name === 'CastError'){
        customError.msg = `No ID was found with ${err.value}`
        customError.statusCode = 404
    }
    if(err.name === 'ValidationError'){
        customError.msg = Object.values(err.errors).map((item)=>item.message).join(',')
        customError.statusCode = 400
    }
    if(err.code === 11000){
        customError.statusCode = 400
        customError.msg = `Duplicate ${Object.keys(err.keyValue)} entered`
    }
    //res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:err})
    res.status(customError.statusCode).json({msg:customError.msg})
}

module.exports = { errorHandlerMiddleware } 