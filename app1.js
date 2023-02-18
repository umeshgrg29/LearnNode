const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        const msg = fs.readFileSync('message.txt', 'utf8')
        res.write(`<html><head><title>My app</title></head><body><h1>${msg}</h1><form action ="/message" method="POST"><input type="text" name ="message"><button type="submit">Send</button></form></body></html>`)
        return res.end()
    }
    else if(url ==='/message' && method === 'POST')
    {
        const body = [];
        req.on('data', (chunk) =>{
            console.log(chunk);
            body.push(chunk);
        })

        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302
                res.setHeader('location', '/')
                return res.end()
            }) 
        })
       
    }

}
)

server.listen(4000);
