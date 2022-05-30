const express = require('express')
const app = express()

const books = require('./routes/booklist')

//console.log(books)

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/books', books)

app.listen(3004, () => {
    console.log('Server is listening 3004')
})
