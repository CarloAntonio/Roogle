import React from 'react';
import PropTypes from 'prop-types';

import BreakdownItem from '../BreakdownItem/BreakdownItem';

import { objToArrHelper } from '../../../utils/helpers';

import classes from './NutrientSection.css';

const NutrientSection = (props) => {

    const nutrientData = objToArrHelper(props.totalNutrients);

    return (
        <section className="container" data-test="component-nutrient-section">
            <div className="row justify-content-space-between">
                <h5 className={classes.styles + " col-12 text-center"}>Nutrient Breakdown (per serving)</h5>

                {nutrientData.map(data => {
                    return <BreakdownItem 
                        key={data.id}
                        id={data.id}
                        name={data.label} 
                        value={data.quantity}
                        yield={props.yield}
                        unit={data.unit} 
                        data-test="breakdown-item" />
                })}
                
            </div>
        </section>
    );
}

NutrientSection.propTypes = {
    totalNutrients: PropTypes.object
}

export default NutrientSection;