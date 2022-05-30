//Globals - NO WINDOW !!!!

//__dirname - path to the current directory
//__filename - file name
//require - function to use modules
//modules - info about the current module
//process - info about env where the program is being executed

// console.log(__dirname)
// console.log(__filename)

// setInterval(()=>{
//     console.log('Hello world')
// },1000)

// console.log('Hi')
const names = require('./name')
const sayHi = require('./utils')
const alternative = require('./alternative-name')

sayHi('susan') 
sayHi(names.john)
sayHi(names.peter)

console.log(alternative )

require('./mind-granade')

const _ = require('lodash')

const lists = [1,[2,[3,[4]]]]
const items = _.flattenDeep(lists)
console.log(items)
console.log('Hello world')

//install node dependency: npm i [package_name]
//dev dependency: npm i [package_name] -D
//run command: change in scripts
//uninstall package: npm uninstall [package_name]

//install package globally
//sudo npm install -g [package_name]