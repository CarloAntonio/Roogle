import React from 'react';
import { shallow } from 'enzyme';

import BreakdownItem from './BreakdownItem';

import { findByTestAttr, checkProps } from '../../../utils/testUtils';

const defaultProps = {
    name: "TestName",
    value: "TestValue"
}

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<BreakdownItem {...setupProps} />)
}

describe('component', () => {
    
    let component;
    beforeEach(() => {
        const wrapper = setup();
        component = findByTestAttr(wrapper, 'component-breakdown-item');
    });
    test('renders without error', () => {
        expect(component.length).toBe(1);
    });
    test('renders when given appropriate props', () => {
        const expectedProps = { 
            name: "Folae Equivdalent:", 
            value: "666.13 kcal" 
        };
        checkProps(BreakdownItem, expectedProps);
    });
    
});