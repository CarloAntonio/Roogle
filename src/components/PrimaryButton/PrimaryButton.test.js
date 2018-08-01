
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../utils/testUtils';

import PrimaryButton from './PrimaryButton';

import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ 
    adapter: new EnzymeAdapter()
});


const setup = (props={}) => {
    return shallow(<PrimaryButton {...props}/>);
}

describe('component', () => {

    let component;
    const props = {
        name: "Search"
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
            extraStyles: "mx-1"
        }

        checkProps(PrimaryButton, expectedProps);
    });

    test('contains props name', () => {
        expect(component.text()).toBe(props.name);
    });

});

