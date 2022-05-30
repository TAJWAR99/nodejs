const { writeFileSync } = require('fs')
const { createReadStream } = require('fs')

for(let i = 0; i < 10000; i++){
    writeFileSync('./context/big.txt', `hello world ${i}\n`, {flag : 'a'})
}

const stream = createReadStream('./context/big.txt')
 
//highWaterMark - control size
// const stream = createReadStream('./context/big.txt', {highWaterMark: 90000})
// const stream = createReadStream('./context/big.txt', { encoding: 'utf-8'})

stream.on('data', (result) => {
    console.log(result)
})

stream.error('error', (err) => {
    console.log(err)
})