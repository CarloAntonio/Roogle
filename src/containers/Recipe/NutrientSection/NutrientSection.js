import React from 'react';
import PropTypes from 'prop-types';

import BreakdownItem from '../BreakdownItem/BreakdownItem';

import classes from './NutrientSection.css';

const NutrientSection = (props) => {
    return (
        <section className="container" data-test="component-nutrient-section">
            <div className="row justify-content-space-between">
                <h5 className={classes.styles + " col-12 text-center"}>Nutrient Breakdown (per serving)</h5>

                {props.nutrientData.map(data => {
                    return <BreakdownItem 
                        key={data.name}
                        name={data.name} 
                        value={data.value} 
                        data-test="breakdown-item" />
                })}
                
            </div>
        </section>
    );
}

NutrientSection.propTypes = {
    nutrientData: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ).isRequired
}

export default NutrientSection;