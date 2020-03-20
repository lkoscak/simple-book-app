import React from 'react';

function BookForm(){
    return(
        <form>
            <div className="form-group">
                <label for="title">Book title</label>
                <input type="text" id="title" className="form-control"/>
            </div>
            <div className="form-group">
                <label for="author">Book author</label>
                <input type="text" id="author" className="form-control"/>
            </div>
            <div className="form-group">
                <label for="description">Book description</label>
                <textarea name="description" id="description" cols="20" rows="5" className="form-control"/>
            </div>
            <input id="book-submit" type="submit" value="Add Book" className="btn btn-warning btn-block"/>
        </form>
    );
}

export default BookForm;