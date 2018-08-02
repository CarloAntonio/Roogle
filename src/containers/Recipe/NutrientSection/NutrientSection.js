import React from 'react';

import BreakdownItem from '../BreakdownItem/BreakdownItem';

import { nutrientData } from '../../../utils/testData';
import classes from './NutrientSection.css';

const NutrientSection = () => {
    return (
        <section className="container">
            <div className="row justify-content-space-between">
                <h5 className={classes.styles + " col-12 text-center"}>Nutrient Breakdown (per serving)</h5>

                {nutrientData.map(data => {
                    return <BreakdownItem 
                        key={data.name}
                        name={data.name} 
                        value={data.value} />
                })}
                
            </div>
        </section>
    );
}

export default NutrientSection;