import React from 'react';

import Title from './Title';
import Form from './BookForm';
import Table from './BookTable';
import {Footer} from './Footer';

function App(){
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