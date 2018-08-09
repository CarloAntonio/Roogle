import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../../utils/testUtils';

import HealthSelection from './HealthSelection';

const defaultProps = {
    value: 'alcohol-free',
    label: 'Alcohol-Free',
    isChecked: false,
    healthItemChange: jest.fn()
}

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props}
    return shallow(<HealthSelection { ...setupProps} />);
} 

describe('component', () => {
    let component;
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
        component = findByTestAttr(wrapper, 'component-health-selection');
    });

    test('renders without errors', () => {
        expect(component.length).toBe(1);
    });

    test('does not throw warning with expected props', () => {
        checkProps(HealthSelection, defaultProps);
    });

    test(`'label is rendered as a child of label element`, () => {
        const label = findByTestAttr(wrapper, 'label-element');
        expect(label.text()).toBe(defaultProps.label);
    });

    test(`'healthItemChange fxn is called when input is clicked`, () => {
        const input = findByTestAttr(wrapper, 'input-element');
        input.simulate('click');

        const clickCount = defaultProps.healthItemChange.mock.calls.length;
        expect(clickCount).toBe(1);
    });
});

