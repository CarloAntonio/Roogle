import React from 'react';

import HealthSelection from '../HealthSelection/HealthSelection';
import DietSelection from '../DietSelection/DietSelection';
import DropdownSelection from '../DropdownSelection/DropdownSelection';

import { healthOptions, dietOptions } from '../../utils/testData';

import dropdownData from '../../data/dropdownData';

const AdvanceSection = () => {
    return (
        <section className="container mx-auto">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <h4 className="px-4 border-bottom border-custom-color text-color-primary text-stack-one">Health</h4>
                </div>

                {healthOptions.map(healthOption => {
                    return <HealthSelection 
                                value={healthOption.value} 
                                label={healthOption.label} 
                                key={healthOption.label}/>
                })}
                
            </div>

            <div className="row">

                <div className="col-6 col-md-4 col-lg-3 ml-auto">
                    <div className="d-flex justify-content-start">
                        <h4 className="px-4 border-bottom border-custom-color text-color-primary text-stack-one">Diet</h4>
                    </div>
                    
                    {dietOptions.map(dietOption => {
                        return <DietSelection 
                                    value={dietOption.value} 
                                    label={dietOption.label}
                                    key={dietOption.value} />
                    })}

                </div>

                <div className="dropdownOptions col-6 col-md-4 col-lg-3 mr-auto">

                    {dropdownData.map(data => {
                        return <DropdownSelection
                                    title={data.title}
                                    id={data.id}
                                    options={data.options} 
                                    key={data.id}/>
                    })}

                </div>

            </div>

        </section>
    );
}

export default AdvanceSection;