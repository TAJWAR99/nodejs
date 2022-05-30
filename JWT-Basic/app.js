const express = require('express')
const app = express()
require('dotenv').config()
require('express-async-errors')

const routes = require('./routes/route')
const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/error-handler')


//middleware
app.use(express.json())

//routes

app.use('/api/v1', routes) 

app.use(notFound)
app.use(errorHandlerMiddleware)


//connection
const port = process.env.PORT || 3000

const start = async () => {
    try {
        //connectDB
        app.listen(port, () => console.log('Server 3000 is listening'))
    } catch (error) {
        console.log(error)
    }
}

start()