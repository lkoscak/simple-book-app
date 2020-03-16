const express = require('express');
const router = express.Router();
const Book = require('../model/book');

// Return all books in database
router.get('/', (req, res) => {
    Book.getBooks((err, books) => {
        res.json(books);
    })
});

// Add book to database
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

// Get book by title
router.get('/:title', (req, res) => {
    let bookTitle = req.params.title;
    
    Book.getBookByTitle(bookTitle, (err, book) => {
        res.json(book);
    })
})

// Delete book by given id
router.delete('/:id', (req, res) => {
    let bookId = req.params.id;
    Book.deleteBook(bookId, (err) => {
        if(err !== null){
            res.json({message:'Error while deleting from database'});
        }
    })
})

module.exports = router;