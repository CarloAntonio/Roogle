import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils/testUtils';

import NutrientSection from './NutrientSection';

const defaultProps = {
    totalNutrients: {
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
        cholesterol: {
            placeholder: "Cholesterol (mg)",
            code: "CHOLE",
            value: "",
            size: "mg",
        },
    }
}

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<NutrientSection { ...setupProps } />);
}

describe('component', () => {
    let component;
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
        component = findByTestAttr(wrapper, 'component-nutrient-section');
    });
    test('renders without error', () => {
        expect(component.length).toBe(1);
    });
    test('renders when given appropriate props', () => {
        checkProps(NutrientSection, defaultProps);
    });
    test('subcomponents renders appropriate number of itself', () => {
        const breakdownItem = findByTestAttr(wrapper, 'breakdown-item');
        expect(breakdownItem.length).toBe(3);
    });
});