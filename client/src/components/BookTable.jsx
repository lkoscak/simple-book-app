import React, {useState} from 'react';

import Row from './BookTableRow';

function BookTable(){

    const [books, setBooks] = useState([]);

    function fetchBooks(){
        fetch('/books').then(res => res.json()).then(data => setBooks(data)).catch(err => console.log(err));
    }

    React.useEffect(() => fetchBooks(), []);

    function deleteBook(bookId){
        fetch(`books/${bookId}`,{
            method:'DELETE'
        })
        .then(removeBookFromTable(bookId));
    }

    function removeBookFromTable(bookId){
        console.log(bookId);
        setBooks(books.filter(book => book._id!==bookId));
    }

    return(
        <table className="table table-striped mt-5 mb-5">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Description</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {books.map(book => <Row 
                key={book._id} 
                id={book._id}
                title={book.title} 
                author={book.author} 
                description={book.description} 
                deleteBook={deleteBook}/>)}
            </tbody>
        </table>
    );
}

export default BookTable;