const mongoose = require('mongoose')

// const connectionString = 'mongodb+srv://username:password@nodeexpressproject.ffkqr.mongodb.net/?retryWrites=true&w=majority'

// const connectDB = (url) => {
//     return mongoose.connect(connectionString)
// }

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectDB