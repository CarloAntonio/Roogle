import React from 'react';

import NutrientItem from '../NutrientItem/NutrientItem';
import classes from '../NutrientSection/NutrientSection.css';

import { nutrientOptions } from '../../utils/testData'

const NutrientSection = (props) => {
    return (
        <section className="container">

            <div className="d-flex justify-content-center">
                <h4 className={classes.subtitle + " px-4 border-bottom"}>Max Nutrients</h4>
            </div>

            <div className="row mx-auto d-flex justify-content-center">

                {nutrientOptions.map(option => {
                    return <NutrientItem 
                        key={option.placeholder}
                        placeholder={option.placeholder}/>
                })}

            </div>

        </section>
    );
}

export default NutrientSection;