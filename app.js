// jshint esversion:6
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const books = require('./routes/books');

// Connecting to database and checking for status
mongoose.connect(process.env.DB,  { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected"))
.catch(err => {
  console.log("Not Connected: ", err);
});


// Configuring express app
const app = express();

app.use(express.static(path.join(__dirname,'build')));

app.use(bodyParser.json());
app.use('/books', books);

const port = process.env.PORT || 9000;

// Home page route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'build','index.html'));
})

// Listening at port
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
