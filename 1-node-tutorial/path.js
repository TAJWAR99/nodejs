const path = require('path')
console.log(path.sep)

const filePath = path.join('/context','subfolder','text.txt')

console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'context','subfolder','text.txt')

console.log(absolute)