// Working with http
const http = require('http')


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome Master Dhaniel')
    }
    if (req.ulr === '/about') {
        res.end('Wrong Page !')
    }
    res.end(`
    <h2> Oops!</h2>
    <p> We can't seem to find the Page you searched for ! </p>
    <a href="/"> Back Home </a>
    `)
})

server.listen(5000)