
import React from 'react';
import propTypes from 'prop-types';

import classes from './PrimaryButton.css';

const PrimaryButton = (props) => {
    return (
        <button 
            type="button" 
            className={classes.custom + ` btn rounded ${props.extraStrap}`}
            onClick={props.toggleSearch}
            data-test="component-primary-button">
                {props.name}
        </button>
    );
}

PrimaryButton.propTypes = {
    name: propTypes.string.isRequired,
    extraStrap: propTypes.string
}

export default PrimaryButton;