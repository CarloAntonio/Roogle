import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../utils/testUtils';
import { toggleSearch } from '../../store/actions/actUI';
import Recipe, { UnconnectedRecipe } from './Recipe';

import { toggleNutrientDetails, toggleDailyDetails, toggleModal } from '../../store/actions/actUI';

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    return shallow(<Recipe store={store} />).dive();
}



describe("nutrient section should", () => {
    test("render, when container's showNutrient state is true", () => {
        const props = { 
            redUI: {
                showNutrientDetails: true,
            } 
        };
        const wrapper = setup(props);
        const section = findByTestAttr(wrapper, 'nutrient-section');
        expect(section.length).toBe(1);
    });
    test("render, when container's showNutrient state is true", () => {
        const props = { 
            redUI: {
                showNutrientDetails: false,
            } 
        };
        const wrapper = setup(props);
        const section = findByTestAttr(wrapper, 'nutrient-section');
        expect(section.length).toBe(0);
    });
});

describe("daily section should", () => {
    test("render, when container's showDaily state is true", () => {
        const props = { 
            redUI: {
                showDailyDetails: true,
            } 
        };
        const wrapper = setup(props);
        const section = findByTestAttr(wrapper, 'daily-section');
        expect(section.length).toBe(1);
    });
    test("render, when container's showDaily state is true", () => {
        const props = { 
            redUI: {
                showDailyDetails: false,
            } 
        };
        const wrapper = setup(props);
        const section = findByTestAttr(wrapper, 'daily-section');
        expect(section.length).toBe(0);
    });
});

describe('redux', () => {

    test("has 'showNutrientDetails' prop piece of state from reducers", () => {
        const showNutrientDetails = true; 
        const wrapper = setup({
            redUI: { showNutrientDetails }
        });
        const showNutrientDetailsProp = wrapper.instance().props.showNutrientDetails;
        expect(showNutrientDetailsProp).toBe(showNutrientDetails);
        expect(showNutrientDetailsProp).toBeBoolean();
    });

    test("has 'showDailyDetails' prop piece of state from reducers", () => {
        const showDailyDetails = false; 
        const wrapper = setup({
            redUI: { showDailyDetails }
        });
        const showDailyDetailsProp = wrapper.instance().props.showDailyDetails;
        expect(showDailyDetailsProp).toBe(showDailyDetails);
        expect(showDailyDetailsProp).toBeBoolean();
    });

    test("has 'toggleNutrientDetails' action prop", () => {
        const wrapper = setup();
        const toggleNutrientDetailsProp = wrapper.instance().props.toggleNutrientDetails;
        expect(toggleNutrientDetailsProp).toBeInstanceOf(Function);
    });

    test("has 'toggleDailyDetails' action prop", () => {
        const wrapper = setup();
        const toggleDailyDetailsProp = wrapper.instance().props.toggleDailyDetails;
        expect(toggleDailyDetailsProp).toBeInstanceOf(Function);
    });

    test("has 'toggleModal' action prop", () => {
        const wrapper = setup();
        const toggleModalProp = wrapper.instance().props.toggleModal;
        expect(toggleModalProp).toBeInstanceOf(Function);
    });

});

describe("Action creator", () => {

    let initialState;
    beforeEach(() => {
        initialState = {
            redUI: {
                modal: false,
                showNutrientDetails: false,
                showDailyDetails: false
            } 
        }
    });

    test("'toggleModal' is called, should return opposite boolean value", () => {
        const store = storeFactory(initialState);
        const wrapper = shallow(<Recipe store={store} />).dive();
        store.dispatch(toggleModal());
        const newState = store.getState();

        const expectedState = {
            ...initialState,
            redUI: {
                modal: true,
                showNutrientDetails: false,
                showDailyDetails: false
            }
        }
        
        expect(newState).toEqual(expectedState);
    });

    test("'toggleNutrientDetails' is called, should return opposite boolean value", () => {
        const store = storeFactory(initialState);
        const wrapper = shallow(<Recipe store={store} />).dive();
        store.dispatch(toggleNutrientDetails());
        const newState = store.getState();

        const expectedState = {
            ...initialState,
            redUI: {
                modal: false,
                showNutrientDetails: true,
                showDailyDetails: false
            }
        }

        expect(newState).toEqual(expectedState);
    });

    test("'toggleDailyDetails' is called, should return opposite boolean value", () => {
        const store = storeFactory(initialState);
        const wrapper = shallow(<Recipe store={store} />).dive();
        store.dispatch(toggleDailyDetails());
        const newState = store.getState();

        const expectedState = {
            ...initialState,
            redUI: {
                modal: false,
                showNutrientDetails: false,
                showDailyDetails: true
            }
        }

        expect(newState).toEqual(expectedState);
    });

    
})
