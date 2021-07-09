const http = require('http');
const PORT = 8000;

function requestListener(req, res) {
    const url = req.url;
    if (url === '/') {
        console.log("Connected");

        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Hello World</h1>')
        res.end();
    }
}

const server = http.createServer(requestListener); // requestListener is run for every request to the server

server.listen(PORT);