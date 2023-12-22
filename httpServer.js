const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    console.log("Hello from server");
    const date = `${Date.now()}`;
    fs.writeFile("Server.txt", date, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            res.end('Error writing to file');
        } else {
            console.log('Data written to Server.txt');
            res.write("This is from the server you requested to");
            res.end();
        }
    });
});

myServer.listen(1200);