import React from 'react';
import PropTypes from 'prop-types';

import classes from './HealthSelection.css';

const HealthSelection = (props) => {

    return (
        <div className="d-flex justify-content-center align-items-center" data-test="component-health-selection">
            <input 
                className={classes.input} 
                type="checkbox" 
                id={props.value} 
                readOnly
                checked={props.isChecked}
                onClick={() => props.healthItemChange(props.value)}
                data-test="input-element"/>
            <label 
                className={classes.label + " ml-1 my-1"} 
                htmlFor={props.value}
                data-test="label-element">{props.label}</label>
        </div>
    );

}

HealthSelection.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    healthItemChange: PropTypes.func
}

export default HealthSelection;