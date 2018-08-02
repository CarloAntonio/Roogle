import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils/testUtils';

import NutrientSection from './NutrientSection';

const defaultProps = {
    nutrientOptions: []
}
const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<NutrientSection {...setupProps}/>)
}

describe('component', ()=> {

    let component;
    beforeEach(() => {
        const wrapper = setup();
        component = findByTestAttr(wrapper, 'component-nutrient-section');
    });

    test('renders without error', () => {
        expect(component.length).toBe(1);
    });

    test('renders without error with appropriate props', () => {
        const expectedProps = { 
            nutrientOptions: [{ placeholder: "Lithium" }]
        };
        checkProps(NutrientSection, expectedProps);
    });

});

describe("component's subcomponents", () => {

    let wrapper;
    beforeEach(() => {
        const inputProps = { 
            nutrientOptions: [
                { placeholder: "Lithium" }, 
                { placeholder: "Lithium" },
                { placeholder: "Lithium" },
            ]
        };
        wrapper = setup(inputProps);
    });
    test('renders correct number of health selection items', () => {
        const component = findByTestAttr(wrapper, 'nutrient-option');
        expect(component.length).toBe(3);
    });
});