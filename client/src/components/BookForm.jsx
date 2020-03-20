import React, {useState} from 'react';

function BookForm(){

    const [book, setBook] = useState({
        title:"",
        author:"",
        description:""
    });

    function inputChanged(event){
        const {value, name} = event.target;
        setBook(prevValue => { return{
            ...prevValue, [name]:value
        }});
    }

    function saveBook(event){
        fetch('books',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(book)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log('Error adding book to database'));

        event.preventDefault();
        
    }

    return(
        <form onSubmit={saveBook}>
            <div className="form-group">
                <label for="title">Book title</label>
                <input type="text" name="title" className="form-control"  value={book.title} onChange={inputChanged}/>
            </div>
            <div className="form-group">
                <label for="author">Book author</label>
                <input type="text" name="author" className="form-control" value={book.author} onChange={inputChanged}/>
            </div>
            <div className="form-group">
                <label for="description">Book description</label>
                <textarea name="description" cols="20" rows="5" className="form-control" value={book.description} onChange={inputChanged}/>
            </div>
            <input id="book-submit" type="submit" value="Add Book" className="btn btn-warning btn-block"/>
        </form>
    );
}

export default BookForm;