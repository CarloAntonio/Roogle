import React from 'react';
import PropTypes from 'prop-types';

import classes from './BreakdownItem.css';

const BreakdownItem = (props) => {
    return (
        <div className="col-12 col-sm-6 col-md-3 my-1 px-1" data-test="component-breakdown-item">
            <div className={classes.nutrient + " flex-sm-column align-items-center justify-content-center rounded"}>
                <h6 className="d-inline-block m-2">{props.name}</h6>
                <p className="d-inline-block m-2">{props.value}</p>
            </div>
        </div>
    );
}

BreakdownItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default BreakdownItem;