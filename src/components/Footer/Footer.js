import React from 'react';

import classes from './Footer.css';

const Footer = () => {
    return (
        <footer className={classes.styles + " p-3 text-center"}>
            Copyright &copy; <a href="https://www.carlobilbao.com" target="_blank" rel="noopener noreferrer">Carlo Bilbao</a>
        </footer>
    )
}

export default Footer;