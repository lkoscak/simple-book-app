import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function BookTableRow(props){
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.author}</td>
            <td>{props.description}</td>
            <td><button onClick={() => props.deleteBook(props.id)} 
            className="btn btn-warning"><DeleteOutlineIcon fontSize="small"/>
            </button></td>
        </tr>
    );
}

export default BookTableRow;