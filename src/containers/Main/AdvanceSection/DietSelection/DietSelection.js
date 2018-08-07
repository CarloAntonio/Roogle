import React from 'react';
import propTypes from 'prop-types';

import classes from './DietSelection.css';

const DietSelection = (props) => {
    return (
        <div className="d-flex justify-content-center align-items-center" data-test="component-diet-selection">
            <input 
                className={classes.input} 
                type="checkbox" 
                id={props.value} 
                name="feature" 
                readOnly
                value={props.value}
                checked={props.isChecked}
                onClick={() => props.dietItemChange(props.value)}/>
            <label className={classes.label + " ml-1 my-1"} htmlFor={props.value}>{props.label}</label>
        </div>
    );
}

DietSelection.propTypes = {
    value: propTypes.string.isRequired,
    label: propTypes.string.isRequired
}

export default DietSelection;