import React from 'react';

import classes from './Footer.css';

const Footer = () => {
    return (
        <footer className={classes.styles + " p-3 text-center d-flex flex-column flex-sm-row justify-content-between align-items-center"} data-test="component-footer">
            <p className="mb-1 mb-sm-0">Copyright &copy; <a href="https://www.carlobilbao.com" target="_blank" rel="noopener noreferrer">Carlo Bilbao</a></p>
            <div id="edamam-badge" data-color="white"></div>
        </footer>
    )
}

export default Footer;