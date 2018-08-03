import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../utils/testUtils';
import { toggleSearch } from '../../store/actions/actUI';
import Main, { UnconnectedMain } from './Main';

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    return shallow(<Main store={store} />).dive();
}

describe("when container's", () => {

    describe('search state equals 0', () => {

        let wrapper;
        beforeEach(() => {
            const props = { 
                redUI: {
                    search: 0,
                } 
            };
            wrapper = setup(props);
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
            const props = { 
                redUI: {
                    search: 1,
                } 
            };
            wrapper = setup(props);
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
            const props = { 
                redUI: {
                    search: 2,
                } 
            };
            wrapper = setup(props);
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

describe("'toggleSearch' action creator called", () => {

    let store;
    let wrapper;
    const initialState = {
        redUI: {
            search: 0,
        } 
    }
    beforeEach(() => {
        store = storeFactory(initialState);
        wrapper = shallow(<Main store={store} />).dive();
        store.dispatch(toggleSearch());
    });

    test('updates states correctly', () => {
        const newState = store.getState();

        const expectedState = {
            ...initialState,
            redUI: {
                search: 1
            }
        }

        expect(newState).toEqual(expectedState);
    });

    test('renders advance section when search state change from 0 to 1', () => {
        //get store state
        const newState = store.getState();

        //update props with new state
        wrapper.setProps(newState.redUI);

        //check action component
        const component = findByTestAttr(wrapper, 'advance-section');
        expect(component.length).toBe(1);
    });

    test('renders advance and nutrition section when search state change from 1 to 2', () => {
        //call action create a second time
        store.dispatch(toggleSearch());

        //get store state
        const newState = store.getState();

        //update props with new state
        wrapper.setProps(newState.redUI);

        //check action component
        const advanceComponent = findByTestAttr(wrapper, 'advance-section');
        expect(advanceComponent.length).toBe(1);

        //check action component
        const nutrietComponent = findByTestAttr(wrapper, 'advance-section');
        expect(nutrietComponent.length).toBe(1);
    });
})