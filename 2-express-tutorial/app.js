const express = require('express');
const app = express()

const  people  = require('./routes/people')
const auth = require('./routes/auth')

app.use(express.static('./methods-public'))

//parse from data
app.use(express.urlencoded({extended:false}))

//parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)


app.listen(3001, () => {
    console.log('3001 listening')
})
