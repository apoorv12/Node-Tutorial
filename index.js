// const app = require('./app');
// console.log(app.people, app.age);

// const { people, age } = require('./app');
// console.log(people, age);

// var http = require('http');
// http.createServer((request, response) => {
//     response.write("<p> hello this is apoorv </p>");
//     response.end();
//     // response.writeHead(200, { 'Content-Type': 'text/plain' });
//     // response.end('Hello World');
// }).listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');

// const os = require('os');
// console.log(os.platform(), os.homedir());

// const http = require('http');
// http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write("<h1> Hello apoorv </h1>");
//     res.end();
// }).listen(3000);

// console.log("Server running at http://127.0.0.1:3000/");

// const http = require('http');
// const fs = require('fs');

// http.createServer((request, response) => {
//     fs.readFile('./index.html', (err, data) => {
//         if (err) {
//             console.log(err);
//             response.end();
//         } else {
//             // response.write(data);
//             response.end(data);
//         }
//     });
// }).listen(3000);

// console.log('Server running at http://127.0.0.1:3000');

const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch (request.url) {
        case '/':
            path += 'index.html';
            response.statusCode = 200;
            break;

        case '/about':
            path += 'about.html';
            response.statusCode = 200;
            break;

        case '/about-me':
            response.statusCode = 301;
            response.setHeader('Location', '/about');
            response.end();
            break;

        default:
            path += 'error.html';
            response.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            response.end();
        } else {
            // response.write(data);
            response.end(data);
        }
    });
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');

// Status Code
// 200 -OK
// 301 - Resource moved - permananent redirect
// 404 -Not found
// 500 - Internal server error