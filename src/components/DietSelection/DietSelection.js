import React from 'react';
import propTypes from 'prop-types';

import classes from './DietSelection.css';

const DietSelection = (props) => {
    return (
        <div data-test="component-diet-selection">
            <input className={classes.input} type="checkbox" id={props.value} name="feature" value={props.value}/>
            <label className={classes.label + " ml-1 my-1"} htmlFor="{props.value}">{props.label}</label>
        </div>
    );
}

DietSelection.propTypes = {
    value: propTypes.string.isRequired,
    label: propTypes.string.isRequired
}

export default DietSelection;