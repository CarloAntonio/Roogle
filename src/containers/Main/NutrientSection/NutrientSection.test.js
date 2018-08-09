import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils/testUtils';

import NutrientSection from './NutrientSection';

const defaultProps = {
    nutrientItems: {
        calcium: {
            placeholder: "Calcium (mg)",
            code: "CA",
            value: "",
            size: "mg",
        },
        carbs: {
            placeholder: "Carbs (g)",
            code: "CHOCDF",
            value: "",
            size: "g",
        },
    }
}
const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<NutrientSection {...setupProps}/>)
}

describe('component', ()=> {

    let component;
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
        component = findByTestAttr(wrapper, 'component-nutrient-section');
    });

    test('renders without error', () => {
        expect(component.length).toBe(1);
    });

    test('renders without error with appropriate props', () => {
        checkProps(NutrientSection, defaultProps);
    });

    test('subcomponents renders correct number of health selection items', () => {
        const nutrientOptions = findByTestAttr(wrapper, 'nutrient-option');
        expect(nutrientOptions.length).toBe(2);
    });

});