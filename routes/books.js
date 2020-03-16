const express = require('express');
const router = express.Router();
const Book = require('../model/book');

router.get('/', (req, res) => {
    Book.getBooks((err, books) => {
        res.json(books);
    })
});

router.get('/:title', (req, res) => {
    let bookTitle = req.params.title;
    
    Book.getBookByTitle(bookTitle, (err, book) => {
        res.json(book);
    })
})

module.exports = router;