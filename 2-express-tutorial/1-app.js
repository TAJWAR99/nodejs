const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')


const server = http.createServer((req,res) => {
    //console.log(req.url)
    const url = req.url
    if(url == "/"){
        // MIME type
        res.writeHead(200, {'content-type': 'text/html'})

        // res.writeHead(200, {'content-type': 'text/plain'})
        res.write(homePage)
        res.end()
    }
    //CSS
    else if(url == "/styles.css"){
        // MIME type
        res.writeHead(200, {'content-type': 'text/css'})

        // res.writeHead(200, {'content-type': 'text/plain'})
        res.write(homeStyles)
        res.end()
    }
    //IMAGE
    else if(url == "/logo.svg"){
        // MIME type
        res.writeHead(200, {'content-type': 'image/svg+xml'})

        // res.writeHead(200, {'content-type': 'text/plain'})
        res.write(homeImage)
        res.end()
    }
    //JS
    else if(url == "/browser-app.js"){
        // MIME type
        res.writeHead(200, {'content-type': 'text/javascript'})

        // res.writeHead(200, {'content-type': 'text/plain'})
        res.write(homeLogic)
        res.end()
    }
    else{
        // MIME type
        res.writeHead(404, {'content-type': 'text/html'})

        // res.writeHead(200, {'content-type': 'text/plain'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }
    
})

server.listen(3000)