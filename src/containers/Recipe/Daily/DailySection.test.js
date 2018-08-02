import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils/testUtils';

import DailySection from './DailySection';

const defaultProps = {
    dailyData: [{    
        name: 'testname',
        value: 'testvalue'
    }]
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
        const approProps =  { 
            dailyData: [
                { name: "Saturatedq:", value: "47.92%" },
            ]
        }
        checkProps(DailySection, approProps);
    })
})