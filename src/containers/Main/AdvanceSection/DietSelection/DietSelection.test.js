import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../../utils/testUtils';

import DietSelection from './DietSelection';

const defaultProps = {
    value: "test",
    label: "test"
}

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<DietSelection {...setupProps}/>);
}

describe('component', () => {
    
    let component;
    beforeEach(() => {
        const wrapper = setup();
        component = findByTestAttr(wrapper, 'component-diet-selection');
    })

    test('renders without error', () => {
        expect(component.length).toBe(1);
    });

    test('no warning emitted with expected props', () => {
        checkProps(DietSelection, defaultProps);
    });
});
