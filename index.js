const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200);

    res.end('Hola mundo');
})

server.listen('4000', '127.0.0.1', () => {
    console.log('Server on port 3000');
});
