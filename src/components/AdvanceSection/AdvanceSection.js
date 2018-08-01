import React from 'react';

import HealthSelection from '../HealthSelection/HealthSelection';

import { healthOptions } from '../../utils/testData';

const AdvanceSection = () => {
    return (
        <section class="container mx-auto">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <h4 class="px-4 border-bottom border-custom-color text-color-primary text-stack-one">Health</h4>
                </div>

                {healthOptions.map(healthOption => {
                    return <HealthSelection 
                                value={healthOption.value} 
                                label={healthOption.label} 
                                key={healthOption.label}/>
                })}
                
            </div>

            <div class="row">

                <div class="col-6 col-md-4 col-lg-3 ml-auto">
                    <div class="d-flex justify-content-start">
                        <h4 class="px-4 border-bottom border-custom-color text-color-primary text-stack-one">Diet</h4>
                    </div>
                    <div>
                        <input type="checkbox" id="balanced" name="feature" value="balanced"/>
                        <label class="search-label" for="balanced">Balanced</label>
                    </div>
                    <div>
                        <input type="checkbox" id="high-fiber" name="feature" value="high-fiber"/>
                        <label class="search-label" for="high-fiber">High-Fiber</label>
                    </div>
                    <div>
                        <input type="checkbox" id="high-protein" name="feature" value="high-protein"/>
                        <label class="search-label" for="high-protein">High-Protein</label>
                    </div>
                    <div>
                        <input type="checkbox" id="low-carb" name="feature" value="low-carb"/>
                        <label class="search-label" for="low-carb">Low-Carb</label>
                    </div>
                    <div>
                        <input type="checkbox" id="low-fat" name="feature" value="low-fat"/>
                        <label class="search-label" for="low-fat">Low-Fat</label>
                    </div>
                    <div>
                        <input type="checkbox" id="low-sodium" name="feature" value="low-sodium"/>
                        <label class="search-label" for="low-sodium">Low-Sodium</label>
                    </div>
                </div>

                <div class="dropdownOptions col-6 col-md-4 col-lg-3 mr-auto">

                    <div class="d-flex justify-content-start">
                        <h4 class="border-bottom border-custom-color text-color-primary text-stack-one">Max Time:</h4>
                    </div>

                    <div class="input-group mb-3">
                        <select class="custom-select" id="inputGroupSelect01">
                            <option value="15">15 minutes</option>
                            <option value="30">30 minutes</option>
                            <option value="45">45 minutes</option>
                            <option selected value="60">1 hr</option>
                            <option value="90">1.5 hours</option>
                            <option value="120">2 hours</option>
                            <option value="150">2.5 hours</option>
                            <option value="999">Any</option>
                        </select>
                    </div>

                    <div class="d-flex justify-content-start">
                        <h4 class="border-bottom border-custom-color text-color-primary text-stack-one">Max Produce:</h4>
                    </div>
                    <div class="input-group mb-3">
                        <select class="custom-select" id="inputGroupSelect02">
                                <option value="6">6 items</option>
                                <option value="8">8 items</option>
                                <option selected value="10">10 items</option>
                                <option value="12">12 items</option>
                                <option value="6">14 items</option>
                                <option value="8">16 items</option>
                                <option value="10">18 items</option>
                                <option value="99">Any</option>
                        </select>
                    </div>

                    <div class="d-flex justify-content-start">
                        <h4 class="border-bottom border-custom-color text-color-primary text-stack-one">Max Cal:</h4>
                    </div>
                    <div class="input-group mb-3">
                        <select class="custom-select" id="inputGroupSelect01">
                                <option value="300">300 Cal</option>
                                <option value="400">400 Cal</option>
                                <option select value="500">500 Cal</option>
                                <option value="600">600 Cal</option>
                                <option value="700">700 Cal</option>
                                <option value="800">800 Cal</option>
                                <option value="900">900 Cal</option>
                                <option value="99999">Any</option>
                        </select>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default AdvanceSection;