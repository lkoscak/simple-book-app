import React from 'react';

import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';

function Title (){
    return(
        <h1 className="display-5 text-center mt-5 mb-5">
            <MenuBookRoundedIcon className="text-warning" style={{fontSize:45}}/> 
            Simple <span className="text-danger">Book App</span>
        </h1>
    );
}

export default Title;