const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB Atlas
const dbURI = 'mongodb+srv://apoorv12:apoorv12@cluster0.fuwij.mongodb.net/Apoorv-Main?retryWrites=true&w=majority';
mongoose.connect(dbURI).then((result) => console.log('connected to database'))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.listen(3000);
app.disable('etag');


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

// app.get('/about-me', (req, res) =>{
//     res.render('about')
// })

app.use((req, res) => {
    res.status(404).render('error');
});

console.log("Server running at http://localhost:3000/");