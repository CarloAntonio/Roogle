import React from 'react';
import { shallow } from 'enzyme';

import AdvanceSection from './AdvanceSection';

import { findByTestAttr, checkProps } from '../../../utils/testUtils';

const defaultProps = {
    healthItems: {
        "alcohol-free": {
            value: false,
            label: "Alcohol-Free"
        },
    },
    dietItems: {
        "balanced": {
            value: false,
            label: "Balanced"
        },
        "high-fiber": {
            value: false,
            label: "High-Fiber"
        },
    },
    dropdownOptions: [
        {
            title: "Max Time:",
            options: [
                {value: "0", display: "none"},
                {value: "15", display: "15 minutes"},
                {value: "30", display: "30 minutes"},
                {value: "45", display: "45 minutes"},
                {value: "60", display: "1 hour"},
                {value: "90", display: "1.5 hours"},
                {value: "120", display: "2 hours"},
                {value: "150", display: "2.5 hours"},
            ],
            id: "maxTime"
        },
    ],
    healthItemChange: jest.fn(),
    dietItemChange: jest.fn(),
    dropdownItemChange: jest.fn()
}

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<AdvanceSection { ...setupProps }/>)
}

describe('component', () => {

    let component;
    beforeEach(() => {
        const wrapper = setup();
        component = findByTestAttr(wrapper, 'component-advance-section');
    });
    test('renders without errors', () => {
        expect(component.length).toBe(1);
    });
    test('renders with appropriate props', () => {
        checkProps(AdvanceSection, defaultProps);
    });

});

describe("component's subcomponents", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    });
    test('renders correct number of health selection items', () => {
        const component = findByTestAttr(wrapper, 'health-selection-item');
        expect(component.length).toBe(1);
    });
    test('renders correct number of diet selection items', () => {
        const component = findByTestAttr(wrapper, 'diet-selection-item');
        expect(component.length).toBe(2);
    });
    test('renders correct number of dropdown selection items', () => {
        const component = findByTestAttr(wrapper, 'dropdown-selection-item');
        expect(component.length).toBe(1);
    });

});

