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
    beforeEach(() => {
        const wrapper = setup();
        component = findByTestAttr(wrapper, 'component-nutrient-section');
    });
    test('renders without error', () => {
        expect(component.length).toBe(1);
    });
    test('renders when given appropriate props', () => {
        checkProps(NutrientSection, defaultProps);
    });
});

describe("component's subcomponent", () => {
    test('renders appropriate number of itself', () => {
        const props2Items = {
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
            }
        }
        const wrapper = setup(props2Items);
        const subcomponent = findByTestAttr(wrapper, 'breakdown-item');
        expect(subcomponent.length).toBe(2);
    });
})