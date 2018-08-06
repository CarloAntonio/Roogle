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
    dropdownItems: {
        maxTime: "0",
        maxProduce: "0",
        maxCal: "0"
    },
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
        const inputProps = {
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
            dropdownItems: {
                maxTime: "0",
                maxProduce: "0",
                maxCal: "0"
            },
        }
        wrapper = setup(inputProps);
    });
    test('renders correct number of health selection items', () => {
        const component = findByTestAttr(wrapper, 'health-selection-item');
        expect(component.length).toBe(4);
    });
    test('renders correct number of diet selection items', () => {
        const component = findByTestAttr(wrapper, 'diet-selection-item');
        expect(component.length).toBe(3);
    });
    test('renders correct number of dropdown selection items', () => {
        const component = findByTestAttr(wrapper, 'dropdown-selection-item');
        expect(component.length).toBe(1);
    });
});

