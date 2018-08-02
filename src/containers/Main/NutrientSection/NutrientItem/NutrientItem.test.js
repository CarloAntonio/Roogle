import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../../utils/testUtils';

import NutrientItem from './NutrientItem';

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ 
    adapter: new EnzymeAdapter()
});

const defaultProps = {
    placeholder: "Calcium (mg)"
}

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<NutrientItem {...setupProps}/>)
}

describe('component', ()=> {

    let component;
    beforeEach(() => {
        const wrapper = setup();
        component = findByTestAttr(wrapper, 'component-nutrient-item');
    });
    test('renders without error', () => {
        expect(component.length).toBe(1);
    });

    test('renders without error with appropriate props', () => {
        const expectedProps = { placeholder: "Lithium" };
        checkProps(NutrientItem, expectedProps);
    }) 
})