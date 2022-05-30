require('dotenv').config()
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFound = require('./middleware/notFound')
const connectDB = require('./db/connection')
const products = require('./routes/productRoute')

const express = require('express')
const app = express()

//middleware
app.use(express.json())

//routes
app.get('/', (req,res) => {
    res.status(200).send('API')
})
//products route
app.use('/api/v1/products', products)

app.use(notFound)
app.use(errorHandlerMiddleware)

//connection
const port = process.env.PORT || 3000

const start = async ()=> {
    try{
        //connectDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=> {
            console.log(`Server is listening PORT ${port}`)
        })
    }
    catch(error){
        console.log(error)
    }
}
start()
