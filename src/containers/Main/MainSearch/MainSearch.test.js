import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils/testUtils';

import MainSearch from './MainSearch';

const defaultProps = {
    searchType: 0,
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
            searchType: 0,
            toggleSearch: jest.fn()
        }

        checkProps(MainSearch, approProps);
    });

});

test('component renders correct button title based on search prop', () => {
    const props = {
        searchType: 1
    }
    const wrapper = setup(props);
    const container = wrapper.find(`[name="Advance+"]`);
    expect(container.length).toBe(1);
});


