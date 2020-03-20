import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function BookTableRow(props){
    return (
        <tr key={props.id} id={props.id}>
            <td>{props.title}</td>
            <td>{props.author}</td>
            <td>{props.description}</td>
            <td><a className="btn btn-warning"><DeleteOutlineIcon fontSize="small"/></a></td>
        </tr>
    );
}

export default BookTableRow;