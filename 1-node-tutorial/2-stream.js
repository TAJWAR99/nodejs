var http = require('http')
var fs = require('fs')

http.createServer(function (req,res){
    const fileStream = fs.createReadStream('./context/big.txt','utf-8')
    fileStream.on('open', () => {
        fileStream.pipe()
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
}).listen(4000)