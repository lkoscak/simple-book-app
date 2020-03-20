import React, {useState} from 'react';

function App(){

    const [books, setBooks] = useState([]);

    function fetchBooks(){
        fetch('/books').then(res => res.json()).then(data => setBooks(data)).catch(err => console.log(err));
    }

    React.useEffect(() => fetchBooks());

    return (
        <ul>
            {books.map(book => <li key={book._id}>{book.title}</li>)}
        </ul>
    );
}

export default App;