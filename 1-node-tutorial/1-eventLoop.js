console.log('first task')
console.time()

for(let i = 0; i < 1000000; i++){
    //do something
}
console.timeEnd()

console.log('next task')


//How to offload time consuming operations
//it will be showed first
console.log('first task')
setTimeout(() => {
    //it will be showed last
    console.log('second task')
},0)
//it will be showed second
console.log('next task')