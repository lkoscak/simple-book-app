import React, {useState} from 'react';

import Title from './Title';
import Form from './BookForm';
import Table from './BookTable';
import {Footer} from './Footer';

function App(){

    const [books, setBooks] = useState([]);

    function fetchBooks(){
        fetch('/books').then(res => res.json()).then(data => setBooks(data)).catch(err => console.log(err));
    }

    React.useEffect(() => fetchBooks(), []);

    function removeBookFromTable(bookId){
        setBooks(books.filter(book => book._id!==bookId));
    }

    function addBookToTable(book){
        setBooks(prevValue => [...prevValue,book]);
    }

    return (
        <div>
            <Title/>
            <Form
                addBook={addBookToTable}
            />
            <Table
                books={books}
                removeBook={removeBookFromTable}
            />
            <Footer/>
        </div>
    );
}

export default App;