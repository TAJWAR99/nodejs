const {readFile} = require('fs')

console.log('First task')

readFile('./context/first.txt', 'utf-8', (err, res) => {
    if(err){
        console.log(err)
        return
    }
    console.log(res)
    console.log('task completed')
})

console.log('second task')   