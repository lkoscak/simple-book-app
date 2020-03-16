// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const books = require('./routes/books');
const database = require('./config/database');

mongoose.connect(database.connection,  { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected',() => {
    console.log(`Connected to database ${database.connection}`);
});

const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use('/books', books);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Home page of simple-book-app');
})


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
