// Book class for managing books
class Book{
    constructor(title, author, description){
        this.title = title;
        this.author = author;
        this.description = description;
    }
}

// UI static class to handle UI actions
class UI{

    static displayBooks(books){

        books.forEach((book => UI.addBookToList(book)));
    }

    static addBookToList(book){
        


        let tableBody = document.querySelector('#book-list');
        let tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.description}</td>
            <td><a href="#" class="btn btn-warning btn-sm deleteBook">
            Delete</a></td>
        `;

        tableBody.appendChild(tableRow);
    }

    static deleteBook(element){
        if(element.classList.contains('deleteBook')){
            element.parentElement.parentElement.remove();
        }
    }

    static clearInputFields(){

        let title = document.querySelector('#title').value = '';
        let author = document.querySelector('#author').value = '';
        let description = document.querySelector('#description').value = '';
    }

    static showAlert(message, styleClass){
        
        let alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${styleClass}`;
        alertDiv.appendChild(document.createTextNode(message));
        let divContainer = document.querySelector('.container');
        let form = document.querySelector('#book-form');
        divContainer.insertBefore(alertDiv, form);

        let submitButton = document.querySelector('#book-submit');
        submitButton.disabled = true;

        setTimeout(() => {
            document.querySelector('.alert').remove()
            submitButton.disabled = false;
        }, 2000);
    }
}

class Database{

    static getBooksFromDatabase(){
        
        fetch('books')
        .then(res => res.json())
        .then(data => UI.displayBooks(data))
        .catch(err => console.log('Error occured while trying to get books from database'));

    }

    static addBookToDatabse(book){

        fetch('books',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(book)
        })
        .then(res => res.json())
        .then(data => UI.addBookToList(data))
        .catch(err => console.log('Error adding book to database'));
    }
}


// Populate table with books

document.addEventListener('DOMContentLoaded', Database.getBooksFromDatabase());

// Add a new book to table

document.querySelector('#book-form').addEventListener('submit',(e) => {
    e.preventDefault();
    
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let description = document.querySelector('#description').value;

    if(title==='' || author==='' || description===''){
        UI.showAlert('Please enter all the fields', 'warning');
    }else{

        let book = new Book(title, author, description);

        Database.addBookToDatabse(book);
        UI.clearInputFields();

        UI.showAlert('Book is sucesfully added!', 'success');
    }

});

// Remove a book from table

document.querySelector('#book-list').addEventListener('click', e => UI.deleteBook(e.target));
