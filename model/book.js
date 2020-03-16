const mongoose = require('mongoose');

// Defining Book schema

const BookSchema = mongoose.Schema({
    title:{
        type: String
    },
    author:{
        type: String
    },
    description:{
        type: String
    }
});

// Creating model on which database collection is created by name: books
const Book = module.exports = mongoose.model('Book', BookSchema);

module.exports.getBooks = function(callback){
    Book.find(callback);
}

module.exports.getBookById = function(bookId, callback){
    Book.findById(bookId, callback);
}

module.exports.getBookByTitle = function(bookTitle, callback){
    let query = {title:bookTitle};
    Book.findOne(query, callback);
}

module.exports.addNewBook = function(book, callback){
    book.save(callback);
}

module.exports.deleteBook = function(bookId, callback){
    Book.deleteOne( {_id:bookId}, callback);
}

