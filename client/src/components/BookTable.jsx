import React, {useState} from 'react';

import Row from './BookTableRow';

function BookTable(props){

    function deleteBook(bookId){
        fetch(`books/${bookId}`,{
            method:'DELETE'
        })
        .then(props.removeBook(bookId));
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
                {props.books.map(book => <Row 
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