import React from 'react';

import Row from './BookTableRow';

function BookTable(){
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
                <Row
                    id="1"
                    title="something"
                    author="again, something"
                    description="yep, you guessed it, something"
                />
            </tbody>
        </table>
    );
}

export default BookTable;