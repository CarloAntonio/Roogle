import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils/testUtils';

import NutrientSection from './NutrientSection';

const defaultProps = {
    nutrientItems: {}
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
        checkProps(NutrientSection, expectedProps);
    });

});

describe("component's subcomponents", () => {

    let wrapper;
    beforeEach(() => {
        const inputProps = {
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
        wrapper = setup(inputProps);
    });
    test('renders correct number of health selection items', () => {
        const component = findByTestAttr(wrapper, 'nutrient-option');
        expect(component.length).toBe(2);
    });
});