
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

    const props = {
        name: "Search",
        primaryFxn: jest.fn()
    }
    beforeEach(() => {
        const wrapper = setup(props);
        component = findByTestAttr(wrapper, 'component-primary-button');
    })

    test('renders without error', () => {
        expect(component.length).toBe(1);
    });

    test('does not throw warning with expected props', () => {
        const expectedProps = {
            name: "Search",
            extraStrap: "mx-1",
            primaryFxn: jest.fn()
        }

        checkProps(PrimaryButton, expectedProps);
    });

    test("contains props 'name'", () => {
        expect(component.text()).toBe(props.name);
    });

});

test("'primaryFxn' is called when component is clicked", () => {

    //create a mock function and add it to setup
    const mockFxn = jest.fn();
    const props = {
        primaryFxn: mockFxn
    }
    const wrapper = setup(props);

    //click button
    const button = findByTestAttr(wrapper, 'component-primary-button');
    button.simulate('click');

    //count number of calls
    const mockCount = mockFxn.mock.calls.length;
    expect(mockCount).toBe(1);
});

