import React from 'react';
import PropTypes from 'prop-types';

import HealthSelection from './HealthSelection/HealthSelection';
import DietSelection from './DietSelection/DietSelection';
import DropdownSelection from './DropdownSelection/DropdownSelection';

import classes from './AdvanceSection.css';

const AdvanceSection = (props) => {

    let healthOptions = [];
    for(let key in props.healthItems) {
        healthOptions.push({
            ...props.healthItems[key],
            id: key
        });
    }

    return (
        <section className="container mx-auto" data-test="component-advance-section">
        
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h4 className={classes.subtitle + " px-4 border-bottom"}>Health</h4>
                </div>

                {healthOptions.map(healthOption => {
                    return <HealthSelection 
                                value={healthOption.id} 
                                label={healthOption.label}
                                isChecked={healthOption.value}
                                healthItemChange={props.healthItemChange} 
                                key={healthOption.id}
                                data-test="health-selection-item"/>
                })}
            </div>

            <div className="row pt-4">
                <div className="col-6 col-md-4 col-lg-3 ml-auto">
                    <div className="d-flex justify-content-start">
                        <h4 className={classes.subtitle + " px-4 border-bottom"}>Diet</h4>
                    </div>
                    
                    {props.dietOptions.map(dietOption => {
                        return <DietSelection 
                                    value={dietOption.value} 
                                    label={dietOption.label}
                                    key={dietOption.value} 
                                    data-test="diet-selection-item"/>
                    })}
                </div>

                <div className="col-6 col-md-4 col-lg-3 mr-auto">
                    {props.dropdownOptions.map(data => {
                        return <DropdownSelection
                                    title={data.title}
                                    id={data.id}
                                    options={data.options} 
                                    key={data.id}
                                    data-test="dropdown-selection-item"/>
                    })}
                </div>
            </div>

        </section>
    );
}

AdvanceSection.propTypes = {
    healthItems: PropTypes.object.isRequired,
    dietOptions: PropTypes.array.isRequired,
    dropdownOptions: PropTypes.array.isRequired
}

export default AdvanceSection;