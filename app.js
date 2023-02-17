const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/home'){
        res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>My app</title></head><body><h1>Welcome Home </h1></body></html>')
    return res.end()
    }
    else if(url === '/about'){
        res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>My app</title></head><body><h1>Welcome to about us Page </h1></body></html>')
    return res.end()
    }
    else if(url === '/node'){
        res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>My app</title></head><body><h1>Welcome to my node js project </h1></body></html>')
    return res.end()
    }

    
}
)

server.listen(4000);
