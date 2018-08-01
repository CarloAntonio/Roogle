import React from 'react';
import propTypes from 'prop-types';

import classes from './DietSelection';

const DietSelection = (props) => {
    return (
        <div data-test="component-diet-selection">
            <input type="checkbox" id={props.value} name="feature" value={props.value}/>
            <label class={classes.label} for="{props.value}">{props.label}</label>
        </div>
    );
}

DietSelection.propTypes = {
    value: propTypes.string.isRequired,
    label: propTypes.string.isRequired
}

export default DietSelection;