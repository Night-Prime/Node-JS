const { readFileSync, writeFileSync, readFile, write, writeFile } = require('fs')
console.log('Starting this task')
readFile('./Content/First.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./Content/Second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            '/Content/result-async',
            `Here is the result :${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})