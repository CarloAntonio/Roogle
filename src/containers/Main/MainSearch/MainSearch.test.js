import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../utils/testUtils';

import MainSearch from './MainSearch';

const defaultProps = {
    searchType: 0,
    searchText: "Chicken Adobo",
    mainSearchTextChange: jest.fn(),
    toggleSearch: jest.fn(),
    fetchRecipes: jest.fn()
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
        checkProps(MainSearch, defaultProps);
    });

});

describe('component renders correct button title based on search prop', () => {
    
    test('search prop is 1', () => {
        const props = {
            searchType: 0
        }
        const wrapper = setup(props);
        const container = wrapper.find(`[name="Advance"]`);
        expect(container.length).toBe(1);
    });

    test('search prop is 1', () => {
        const props = {
            searchType: 1
        }
        const wrapper = setup(props);
        const container = wrapper.find(`[name="Advance+"]`);
        expect(container.length).toBe(1);
    });

    test('search prop is 2', () => {
        const props = {
            searchType: 2
        }
        const wrapper = setup(props);
        const container = wrapper.find(`[name="Basic"]`);
        expect(container.length).toBe(1);
    });

});

describe(`component executes `, () => {
    test('mainSearchTextChange function at input change', () => {
        const wrapper = setup();
        const container = findByTestAttr(wrapper, 'input-element');
        container.simulate('change');

        const fxnCallCount = defaultProps.mainSearchTextChange.mock.calls.length;
        expect(fxnCallCount).toBe(1);

    })
})


