import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils/testUtils';

import NutrientSection from './NutrientSection';

const defaultProps = {
    nutrientData: [{    
        name: 'testname',
        value: 'testvalue'
    }]
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
        const approProps =  { 
            nutrientData: [
                { name: "Folae Equivdalent:", value: "666.13 kcal" },
            ]
        }
        checkProps(NutrientSection, approProps);
    });
});

describe("component's subcomponent", () => {
    test('renders appropriate number of itself', () => {
        const props2Items = {
            nutrientData: [
                { name: "Folae Equivdalent:", value: "666.13 kcal" },
                { name: "Folte Equvsalent:", value: "666.13 kcal" },
            ]
        }
        const wrapper = setup(props2Items);
        const subcomponent = findByTestAttr(wrapper, 'breakdown-item');
        expect(subcomponent.length).toBe(2);
    });
})