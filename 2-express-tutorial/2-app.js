const express = require('express');
const path = require('path');

const app = express()

//rendering all the static file from public folder
//static and middleware
app.use(express.static('./public'))

//read the html file
//we can add this to static assets
//SSR --> Server Side Rendering
// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

app.all('*', (req,res) => {
    res.status(404).send('Resource not found')
})

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