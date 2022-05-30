const express = require('express');
const logger = require('./logger');
const authorize = require('./authorize');
const app = express()

//req => middleware => res
// const logger = (req,res,next) => {
//     const method = req.method
//     const url = req.url
//     const time = new Date().getFullYear()
//     console.log(method, url, time)
//     next() //passing the middleware
// }

// app.get('/', logger, (req,res) => {
//     res.send("home page")
// })
// app.use(logger)
//app.use('/api',logger) --> for specific routes with api url
 
app.use([ logger, authorize ])

app.get('/', (req,res) => {
    res.send("home page")
})

app.get('/about', (req,res) => {
    res.send("about page")
})

//coming to this part after calling authorized function
app.get('/api/items', (req,res) => {
    console.log(req.user)
    res.send("items")
})

// app.get('/api/items', [logger, authorize] ,(req,res) => {
//     console.log(req.user)
//     res.send("items")
// })

app.listen(3001, () => {
    console.log('3001 listening')
})

// app.get
// app.post
// app.put  --> update data
// app.delete
// app.all
// app.use
// app.listen