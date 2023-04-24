const fs = require('fs');

const requestHandler = (req, res) => {
const url = req.url;
const method = req.method;

if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end(); 
}

if(url === '/message' && method === 'POST'){
    const body = [];
    req.on('data',chunk=>{
        console.log(chunk);
        body.push(chunk);
    });
    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFile('message.txt', message, err=>{
            res.statusCode=302;
            res.setHeader('Location', '/');//redirection
            return res.end();
        });
    });

    
    
}
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>my first page</title></head>');
res.write('<body><h1>hello from my node server</h1></body>');
res.write('</html>');
res.end(); // we done creating the response
};

module.exports = {
    handler: requestHandler,
    someText: 'some code'
}; //global object of node , that register my function so it can be imported in other files 


// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text';

//exports.handler = requestHandler;
//exports.someText = 'Some hard coded text';