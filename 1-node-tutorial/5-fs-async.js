const { readFile, writeFile } = require('fs').promises
// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFile('./context/first.txt', 'utf8')
        const second = await readFile('./context/second.txt', 'utf8')
        console.log(first, second)
        await writeFile('./context/result-mind-granade.txt', `This is awesome : ${first} ${second}`, {flag : 'a' })
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()