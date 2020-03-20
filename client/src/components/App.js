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

    React.useEffect(() => fetchBooks());

    return (
        <div>
            <Title/>
            <Form/>
            <Table/>
            <Footer/>
        </div>
    );
}

export default App;