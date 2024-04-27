const http = require('node:http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    res.end(`${daysOfWeek[new Date().getDay()]}`);
}).listen(8082);