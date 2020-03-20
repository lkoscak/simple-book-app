import React from 'react';

function Footer(){

function getCurrentYear(){
    return new Date().getFullYear();
}

    return(
        <footer className="page-footer font-small" style={{backgroundColor:"#ffa34d"}}>
            <div className="footer-copyright text-center py-3 text-primary">© {getCurrentYear()} by Me</div>
        </footer>
    );
}

export {Footer};