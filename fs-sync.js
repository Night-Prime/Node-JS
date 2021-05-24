//Accessing the First file and second file
const { readFileSync, writeFileSync, readFile, write, writeFile } = require('fs')
console.log('start')
const first = readFileSync('./Content/First.txt', 'utf8');
const second = readFileSync('./Content/Second.txt', 'utf8');
// console.log(first, second)


writeFileSync(
    './Content/result-sync.txt',
    `Here is the result :${first}, ${second}`, { flag: 'a' }
)
console.log('Done with this task')
console.log('Starting another one')