import React, {useState} from 'react';
import Alert from './Alert';

function BookForm(props){

    const [book, setBook] = useState({
        title:"",
        author:"",
        description:""
    });

    const [validationError, setValidationError] = useState(false);
    const [bookSaved, setBookSaved] = useState(false);

    const [submitDisabled, setSubmitDisabled] = useState(false);

    function inputChanged(event){
        const {value, name} = event.target;
        setBook(prevValue => { return{
            ...prevValue, [name]:value
        }});
    }

    function cleanUpFields(){
        setBook({
            title:"",
            author:"",
            description:""
        });
    }

    function validateInput(event){
        if(book.title==='' || book.author==='' || book.description===''){
            setValidationError(true);
            setSubmitDisabled(true);
            setTimeout(() => {
                setValidationError(false);
                setSubmitDisabled(false);
            },2000);
        }else saveBook(event);
        event.preventDefault();
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
        .then(data => props.addBook(data))
        .then(cleanUpFields())
        .then(() => {
            setBookSaved(true);
            setTimeout(() => setBookSaved(false),2000);
        })
        .catch(err => console.log('Error adding book to database'));

    }

    return(
        <form onSubmit={validateInput}>
            {validationError && <Alert
                styleClass="warning"
                message="Please fill all the input fields"
            />}
             {bookSaved && <Alert
                styleClass="success"
                message="Book is saved!"
            />}
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
            <input disabled={submitDisabled} type="submit" value="Add Book" className="btn btn-warning btn-block"/>
        </form>
    );
}

export default BookForm;