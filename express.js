const express = require('express');

// Setting an express app
const app = express();

// listen the app
app.listen(3000);
app.disable('etag');

// responding to listening
app.get('/', (req, res) => {
    // res.send("<h1> This is an express app </h1>");
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

// redirect
app.get('/about-me', (req, res) => {
    res.redirect('/about');
});

// 404 error - It is must to keep this code at the end of the file.
app.use((req, res) => {
    res.status(404).sendFile('./views/error.html', { root: __dirname });
});

console.log('Server running at http://127.0.0.1:3000/');