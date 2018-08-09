
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../utils/testUtils';

import { toggleSearch } from '../../store/reducers/redUI';
import PrimaryButton from './PrimaryButton';

const defaultProps = {
    name: "Search",
    extraStrap: "mx-1",
    primaryFxn: jest.fn()
}

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<PrimaryButton {...setupProps}/>);
}

describe('component', () => {

    let component;
    beforeEach(() => {
        const wrapper = setup();
        component = findByTestAttr(wrapper, 'component-primary-button');
    })

    test('renders without error', () => {
        expect(component.length).toBe(1);
    });

    test('does not throw warning with expected props', () => {
        checkProps(PrimaryButton, defaultProps);
    });

    test("contains props 'name'", () => {
        expect(component.text()).toBe(defaultProps.name);
    });

});

test("'primaryFxn' is called when component is clicked", () => {

    //create a mock function and add it to setup
    const wrapper = setup();

    //click button
    const button = findByTestAttr(wrapper, 'component-primary-button');
    button.simulate('click');

    //count number of calls
    const mockCount = defaultProps.primaryFxn.mock.calls.length;
    expect(mockCount).toBe(1);
});

