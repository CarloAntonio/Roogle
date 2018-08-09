import React from 'react';
import PropTypes from 'prop-types';

import classes from './DietSelection.css';

const DietSelection = (props) => {
    return (
        <div className="d-flex justify-content-center align-items-center" data-test="component-diet-selection">
            <input 
                className={classes.input} 
                type="checkbox" 
                id={props.value} 
                readOnly
                checked={props.isChecked}
                onClick={() => props.dietItemChange(props.value)}
                data-test="diet-selection-input-element"/>
            <label 
                className={classes.label + " ml-1 my-1"} 
                htmlFor={props.value}
                data-test="diet-selection-label-element">{props.label}</label>
        </div>
    );
}

DietSelection.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    dietItemChange: PropTypes.func
}

export default DietSelection;