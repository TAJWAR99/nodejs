const { readFileSync , writeFileSync } = require('fs')
console.log('Start')
const first = readFileSync('./context/first.txt', 'utf-8')
const second = readFileSync('./context/second.txt', 'utf-8')

console.log(first)
console.log(second)

writeFileSync(
    './context/result.txt',`combination of two files: ${first} and ${second}`,{flag:'a'}
)

console.log('Done with writing')
console.log('resume other tasks')