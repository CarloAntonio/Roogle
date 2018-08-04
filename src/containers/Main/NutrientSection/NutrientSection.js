import React from 'react';
import PropTypes from 'prop-types';

import NutrientItem from './NutrientItem/NutrientItem';
import classes from '../NutrientSection/NutrientSection.css';

const NutrientSection = (props) => {

    let nutrientOptions = [];
    for(let key in props.nutrientItems) {
        nutrientOptions.push({
            ...props.nutrientItems[key],
            id: key
        });
    }

    return (
        <section className="container" data-test="component-nutrient-section">

            <div className="d-flex justify-content-center">
                <h4 className={classes.subtitle + " px-4 border-bottom"}>Max Nutrients</h4>
            </div>

            <div className="row mx-auto d-flex justify-content-center">

                {nutrientOptions.map(option => {
                    return <NutrientItem 
                        key={option.id}
                        placeholder={option.placeholder}
                        id={option.id}
                        nutrientItemChange={props.nutrientItemChange}
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