import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../../utils/testUtils';

import DietSelection from './DietSelection';

const defaultProps = {
    value: "low-carb",
    label: "Low-Carb",
    isChecked: false,
    dietItemChange: jest.fn()
}

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<DietSelection {...setupProps}/>);
}

describe('component', () => {
    
    let component;
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
        component = findByTestAttr(wrapper, 'component-diet-selection');
    })

    test('renders without error', () => {
        expect(component.length).toBe(1);
    });

    test('no warning emitted with expected props', () => {
        checkProps(DietSelection, defaultProps);
    });

    test(`'label is rendered as a child of label element`, () => {
        const label = findByTestAttr(wrapper, 'diet-selection-label-element');
        expect(label.text()).toBe(defaultProps.label);
    });

    test(`'dietItemChange fxn is called when input is clicked`, () => {
        const input = findByTestAttr(wrapper, 'diet-selection-input-element');
        input.simulate('click');

        const clickCount = defaultProps.dietItemChange.mock.calls.length;
        expect(clickCount).toBe(1);
    });
});


