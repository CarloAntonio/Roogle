import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../utils/testUtils';

import HealthSelection from './HealthSelection';

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ 
    adapter: new EnzymeAdapter()
});

const defaultProps = {
    value: 'test',
    label: 'test'
}

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props}
    return shallow(<HealthSelection { ...setupProps} />);
} 

describe('component', () => {
    let component;
    beforeEach(() => {
        const wrapper = setup({ label: 'test'});
        component = findByTestAttr(wrapper, 'component-health-selection');
    });

    test('renders without errors', () => {
        expect(component.length).toBe(1);
    });

    test('does not throw warning with expected props', () => {
        const expectedProps = {
            value: 'test',
            label: "test"
        }
        checkProps(HealthSelection, expectedProps);
    });

});



