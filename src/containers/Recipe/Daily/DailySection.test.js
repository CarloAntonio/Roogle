import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils/testUtils';

import DailySection from './DailySection';

const defaultProps = {
    totalDaily: {    
        ENERC_KCAL: {
            label: "Energy",
            quantity: 342.134,
            unit: "%"
        },
        ENER_KCAL: {
            label: "Energyy",
            quantity: 342.134,
            unit: "%"
        },
    },
    yield: 4
}

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<DailySection { ...setupProps } />);
}

describe('component', () => {
    let component;
    beforeEach(() => {
        const wrapper = setup();
        component = findByTestAttr(wrapper, 'component-daily-section');
    });
    test('renders without error', () => {
        expect(component.length).toBe(1);
    });
    test('renders when given appropriate props', () => {
        checkProps(DailySection, defaultProps);
    });
    test('subcomponents renders appropriate number of itself', () => {
        const wrapper = setup();
        const subcomponent = findByTestAttr(wrapper, 'daily-item');
        expect(subcomponent.length).toBe(2);
    });
});