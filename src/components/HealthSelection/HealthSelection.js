import React from 'react';
import propTypes from 'prop-types';

import classes from './HealthSelection.css';

const HealthSelection = (props) => {
    return (
        <div class="col-6 col-md-4 col-lg-3 col-xl-2" data-test="component-health-selection">
            <input type="checkbox" id={props.value} name="feature" value={props.value}/>
            <label className={classes.label} htmlFor={props.value}>{props.label}</label>
        </div>
    );
}

HealthSelection.propTypes = {
    value: propTypes.string.isRequired,
    label: propTypes.string.isRequired
}

export default HealthSelection;