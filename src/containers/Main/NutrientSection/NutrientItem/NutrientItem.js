import React from 'react';
import PropTypes from 'prop-types';

import classes from './NutrientItem.css';

const NutrientItem = (props) => {
    return (
        <input 
            className={classes.input + " m-1 p-1 text-center rounded"} 
            type="integer" 
            placeholder={props.placeholder}
            value={props.value}
            onChange={(event) => props.nutrientItemChange(props.id, event.target.value)}
            data-test="component-nutrient-item"/>
    );
}

NutrientItem.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    nutrientItemChange: PropTypes.func
}

export default NutrientItem;