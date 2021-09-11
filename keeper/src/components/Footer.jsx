import React from 'react';

const newDate = new Date().getFullYear();

function Footer(){
    return(
        <footer>
           <h1>Copyright © {newDate}</h1>
        </footer>
    )
}

export default Footer;