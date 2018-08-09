import React from 'react';
import PropTypes from 'prop-types';

import HealthSelection from './HealthSelection/HealthSelection';
import DietSelection from './DietSelection/DietSelection';
import DropdownSelection from './DropdownSelection/DropdownSelection';

import classes from './AdvanceSection.css';

import { objToArrHelper } from '../../../utils/helpers';

const AdvanceSection = (props) => {

    //convert health options into an array
    let healthOptions = objToArrHelper(props.healthItems);

    //convert diet options into an array
    let dietOptions = objToArrHelper(props.dietItems);

    return (
        <section className="container mx-auto" data-test="component-advance-section">
        
            <div className="row">

                <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center">
                    <div className="d-flex justify-content-center">
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

                <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                    <div className="d-flex justify-content-center">
                        <h4 className={classes.subtitle + " px-4 border-bottom"}>Diet</h4>
                    </div>
                    
                    {dietOptions.map(dietOption => {
                        return <DietSelection 
                                    value={dietOption.id} 
                                    label={dietOption.label}
                                    isChecked={dietOption.value}
                                    dietItemChange={props.dietItemChange}
                                    key={dietOption.id} 
                                    data-test="diet-selection-item"/>
                    })}
                </div>

                <div className="col-10 col-sm-5 col-md-4 mx-auto mt-5 mt-lg-0">
                    {props.dropdownOptions.map(data => {
                        return <DropdownSelection
                                    title={data.title}
                                    id={data.id}
                                    options={data.options} 
                                    dropdownItemChange={props.dropdownItemChange}
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
    dietItems: PropTypes.object.isRequired,
    dropdownOptions: PropTypes.array.isRequired,
    healthItemChange: PropTypes.func.isRequired,
    dietItemChange: PropTypes.func.isRequired,
    dropdownItemChange: PropTypes.func.isRequired
}

export default AdvanceSection;