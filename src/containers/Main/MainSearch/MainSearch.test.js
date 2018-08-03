import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils/testUtils';

import MainSearch from './MainSearch';

const defaultProps = {
    toggleSearch: jest.fn()
}
const setup =(props={}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<MainSearch {...setupProps} />);
}

describe('component', () => {
    let component;
    beforeEach(() => {
        const wrapper = setup();
        component = findByTestAttr(wrapper, 'component-main-search');
    })
    test('renders without error', () => {
        expect(component.length).toBe(1);
    });
    test('renders without error given appropriate props', () => {
        const approProps = {
            toggleSearch: jest.fn()
        }

        checkProps(MainSearch, approProps);
    })
})


