import React from 'react';

function Alert(props){
    return(
        <div className={`alert alert-${props.styleClass}`}>{props.message}</div>
    );
}

export default Alert;