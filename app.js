// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Home page of simple-book-app');
})


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
