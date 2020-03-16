const express = require('express');
const router = express.Router();
const Book = require('../model/book');

router.get('/', (req, res) => {
    Book.getBooks((err, books) => {
        res.json(books);
    })
});

router.post('/', (req, res) => {
    let newBook = new Book({
        title : req.body.title,
        author : req.body.author,
        description : req.body.description
    });

    Book.addNewBook(newBook, (err, book) => {
        res.json(book);
    });
});

router.get('/:title', (req, res) => {
    let bookTitle = req.params.title;
    
    Book.getBookByTitle(bookTitle, (err, book) => {
        res.json(book);
    })
})



module.exports = router;