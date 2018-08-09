import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../../utils/testUtils';

import DropdownSelection from './DropdownSelection';

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
    dropdownItemChange: jest.fn()
};

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<DropdownSelection {...setupProps}/>)
}

describe('component', () => {

    let component;
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
        component = findByTestAttr(wrapper, 'component-dropdown-selecton');
    })
    test('renders without error', () => {
        expect(component.length).toBe(1);
    });

    test('no warning emmited with expected props', () => {
        checkProps(DropdownSelection, defaultProps);
    });

    test('renders the appropriate number of option elements', ()=> {
        const optionElements = findByTestAttr(wrapper, 'option-element');
        expect(optionElements.length).toBe(8);
    });

    test(`'dropdownItemChange' fxn is called when change occurs`, () => {
        const selectElement = findByTestAttr(wrapper, 'select-element');
        selectElement.simulate('change', { target: { value: "15"}});

        const changeCount = defaultProps.dropdownItemChange.mock.calls.length;
        expect(changeCount).toBe(1);
    });

});