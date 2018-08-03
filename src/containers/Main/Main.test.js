import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../utils/testUtils';
import Main from './Main';

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    return shallow(<Main store={store} />).dive();
}

describe("when container's", () => {

    describe('search state equals 0', () => {

        let wrapper;
        beforeEach(() => {
            const test = { 
                redUI: {
                    search: 0,
                } 
            };
            wrapper = setup(test);
        });

        test('it renders container without errors', () => {
            const component = findByTestAttr(wrapper, 'component-main');
            expect(component.length).toBe(1);
        });

        test('it renders main search', () => {
            const component = findByTestAttr(wrapper, 'main-search');
            expect(component.length).toBe(1);
        });

        test('it does not render advance section', () => {
            const componet = findByTestAttr(wrapper, 'advance-section');
            expect(componet.length).toBe(0);
        });

        test('it does not render nutrients section', () => {
            const component = findByTestAttr(wrapper, 'nutrient-section');
            expect(component.length).toBe(0);
        });

        test('it renders recipe section', () => {
            const component = findByTestAttr(wrapper, 'recipe-section');
            expect(component.length).toBe(1);
        });

        test('it renders the footer', () => {
            const component = findByTestAttr(wrapper, 'footer');
            expect(component.length).toBe(1);
        });
    });

    describe('search state equals 1', () => {
        let wrapper;
        beforeEach(() => {
            const test1 = { 
                redUI: {
                    search: 1,
                } 
            };
            wrapper = setup(test1);
        });

        test('it renders container without errors', () => {
            const component = findByTestAttr(wrapper, 'component-main');
            expect(component.length).toBe(1);
        });

        test('it renders main search', () => {
            const component = findByTestAttr(wrapper, 'main-search');
            expect(component.length).toBe(1);
        });

        test('it renders advance section', () => {
            const componet = findByTestAttr(wrapper, 'advance-section');
            expect(componet.length).toBe(1);
        });

        test('it does not render nutrients section', () => {
            const component = findByTestAttr(wrapper, 'nutrient-section');
            expect(component.length).toBe(0);
        });

        test('it renders recipe section', () => {
            const component = findByTestAttr(wrapper, 'recipe-section');
            expect(component.length).toBe(1);
        });

        test('it renders the footer', () => {
            const component = findByTestAttr(wrapper, 'footer');
            expect(component.length).toBe(1);
        });
    });

    describe('search state equals 2', () => {
        let wrapper;
        beforeEach(() => {
            const test1 = { 
                redUI: {
                    search: 2,
                } 
            };
            wrapper = setup(test1);
        });

        test('it renders container without errors', () => {
            const component = findByTestAttr(wrapper, 'component-main');
            expect(component.length).toBe(1);
        });

        test('it renders main search', () => {
            const component = findByTestAttr(wrapper, 'main-search');
            expect(component.length).toBe(1);
        });

        test('it renders advance section', () => {
            const componet = findByTestAttr(wrapper, 'advance-section');
            expect(componet.length).toBe(1);
        });

        test('it does render nutrients section', () => {
            const component = findByTestAttr(wrapper, 'nutrient-section');
            expect(component.length).toBe(1);
        });

        test('it renders recipe section', () => {
            const component = findByTestAttr(wrapper, 'recipe-section');
            expect(component.length).toBe(1);
        });

        test('it renders the footer', () => {
            const component = findByTestAttr(wrapper, 'footer');
            expect(component.length).toBe(1);
        });
    });
});

describe('redux', () => {

    test("has 'search' prop piece of state from reducers", () => {
        const search = 0; 
        const wrapper = setup({
            redUI: { search }
        });
        const searchProp = wrapper.instance().props.search;
        expect(searchProp).toBe(search);
    });

    test("has 'toggleSearch' action prop", () => {
        const wrapper = setup();
        const toggleSearchProp = wrapper.instance().props.toggleSearch;
        expect(toggleSearchProp).toBeInstanceOf(Function);
    });

});