const connectDB = require('./db/connection')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const Task = require('./models/Task')
//protect the secret key or password
require('dotenv').config()
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/error-handler');



//middleware
app.use(express.static('./public'));
app.use(express.json());

//routes
app.use('/api/v1/tasks', tasks)

//middleware
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI) //fetching MONGO_URI from .env file
        app.listen(port, () => {
            console.log(`Server is listening port number ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()