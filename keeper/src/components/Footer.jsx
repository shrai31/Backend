import React from 'react';

const newDate = new Date().getFullYear();

function Footer(){
    return(
        <footer>
           <p>
           <h1>Copyright © {newDate}</h1>
             </p>
        </footer>
    )
}

export default Footer;