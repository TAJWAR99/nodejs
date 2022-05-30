const asyncWrapper = (fn) => {
    return async (req, res, next) => {
      try {
        await fn(req, res, next)
      } 
      catch (error) {
        next(error)
      }
    }
  }
  
  module.exports = asyncWrapper

// async (req,res) => {
//     const getTasks = await Task.find({})
//     res.status(200).json({getTasks}) //Send to the browser-app file
