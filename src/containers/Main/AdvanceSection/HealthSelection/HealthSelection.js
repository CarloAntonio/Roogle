import React from 'react';
import propTypes from 'prop-types';

import classes from './HealthSelection.css';

const HealthSelection = (props) => {

    return (
        <div className="col-6 col-md-4 col-lg-3 col-xl-2" data-test="component-health-selection">
            <input 
                className={classes.input} 
                type="checkbox" 
                id={props.value} 
                name="feature" 
                readOnly
                value={props.value}
                checked={props.isChecked}
                onClick={() => props.healthItemChange(props.value)}/>
            <label className={classes.label + " ml-1 my-1"} htmlFor={props.value}>{props.label}</label>
        </div>
    );

}

HealthSelection.propTypes = {
    value: propTypes.string.isRequired,
    label: propTypes.string.isRequired
}

export default HealthSelection;