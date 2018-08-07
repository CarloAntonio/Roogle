import React from 'react';

import classes from './Footer.css';

const Footer = () => {
    return (
        <footer className={classes.styles + " p-3 text-center d-flex flex-column"} data-test="component-footer">
            <p>Copyright &copy; <a href="https://www.carlobilbao.com" target="_blank" rel="noopener noreferrer">Carlo Bilbao</a></p>
            <div id="edamam-badge" data-color="white"></div>
        </footer>
    )
}

export default Footer;