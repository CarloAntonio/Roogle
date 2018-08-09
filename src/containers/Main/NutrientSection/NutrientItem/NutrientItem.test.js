import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../../utils/testUtils';

import NutrientItem from './NutrientItem';

const defaultProps = {
    placeholder: "Calcium (mg)",
    value: "CA",
    nutrientItemChange: jest.fn()
}

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<NutrientItem {...setupProps}/>)
}

describe('component', ()=> {

    let component;
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
        component = findByTestAttr(wrapper, 'component-nutrient-item');
    });
    test('renders without error', () => {
        expect(component.length).toBe(1);
    });

    test('renders without error with appropriate props', () => {
        checkProps(NutrientItem, defaultProps);
    }); 

    test(`nutrientItemChange fxn is called when input changes`, () => {
        const inputElement = findByTestAttr(wrapper, 'component-nutrient-item');
        inputElement.simulate('change', {target: {value: 12}});

        const fxnCallCount = defaultProps.nutrientItemChange.mock.calls.length;
        expect(fxnCallCount).toBe(1);
    });
})