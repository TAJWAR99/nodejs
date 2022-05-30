const http = require('http')

// const server2 = http.createServer()
// server2.on('request', (req,res) => {
//     res.end('Welcome')
// })

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to home page')
    }
    else if(req.url === '/about'){
        res.end('Welcome to about page')
    }
    else{
        res.end(`
        <h1>Oops!</h1>
        <p>Page not found</p>
        <a href="/"></a>
        `)
    }
    
    // res.write("hello World")
    // res.end()
})
 
server.listen(4000)