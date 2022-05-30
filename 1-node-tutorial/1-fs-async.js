const { readFile, writeFile } = require('fs')
console.log('Start')
readFile('./context/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err)
        return
    }

    const first = result
    readFile('./context/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err)
            return
        }

        const second = result
        writeFile('./context/result-asyn.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log('Done with writing')
        })
    })
})
console.log('Resume other tasks')