import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../../utils/testUtils';

import DropdownSelection from './DropdownSelection';

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ 
    adapter: new EnzymeAdapter()
});

const defaultProps = {
    title: "Max Time:",
    options: [
        {value: "15", display: "15 minutes"},
        {value: "30", display: "30 minutes"},
        {value: "45", display: "45 minutes"},
        {value: "60", display: "1 hour"},
        {value: "90", display: "1.5 hours"},
        {value: "120", display: "2 hours"},
        {value: "150", display: "2.5 hours"},
        {value: "999", display: "Any"},
    ],
    id: "inputGroupSelect01",
    selected: 3
};

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<DropdownSelection {...setupProps}/>)
}

describe('component', () => {

    let component;
    beforeEach(() => {
        const wrapper = setup();
        component = findByTestAttr(wrapper, 'component-dropdown-selecton');
    })
    test('renders without error', () => {
        expect(component.length).toBe(1);
    });

    test('no warning emmited with expected props', () => {
        checkProps(DropdownSelection, defaultProps);
    });
})