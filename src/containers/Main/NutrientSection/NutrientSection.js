import React from 'react';
import PropTypes from 'prop-types';

import NutrientItem from './NutrientItem/NutrientItem';
import classes from '../NutrientSection/NutrientSection.css';

const NutrientSection = (props) => {
    return (
        <section className="container" data-test="component-nutrient-section">

            <div className="d-flex justify-content-center">
                <h4 className={classes.subtitle + " px-4 border-bottom"}>Max Nutrients</h4>
            </div>

            <div className="row mx-auto d-flex justify-content-center">

                {props.nutrientOptions.map(option => {
                    return <NutrientItem 
                        key={option.placeholder}
                        placeholder={option.placeholder}
                        data-test="nutrient-option"/>
                })}

            </div>

        </section>
    );
}

NutrientSection.propTypes = {
    nutrientOptions: PropTypes.arrayOf(
        PropTypes.shape({
            placeholder: PropTypes.string.isRequired
        })
    ).isRequired
}

export default NutrientSection;