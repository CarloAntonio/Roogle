import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../utils/testUtils';
import { toggleSearch } from '../../store/actions/actUI';
import Recipe, { UnconnectedRecipe } from './Recipe';

import { toggleNutrientDetails, toggleDailyDetails, toggleModal } from '../../store/actions/actUI';

const defaultState = {
    redAPI: {
        recipeItems: [
            { 
                recipe: {
                    uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_229fb120b75c5d4e29a8b98ba43883a8",
                    label: "Chicken Adobo",
                    image: "https://www.edamam.com/web-img/3f3/3f3db9cd446edf1680eab304b32f576d.jpg",
                    source: "Food52",
                    url: "https://food52.com/recipes/17507-chicken-adobo-with-okra-and-sunchokes",
                    shareAs: "http://www.edamam.com/recipe/chicken-adobo-229fb120b75c5d4e29a8b98ba43883a8/chicken+adobo",
                    yield: 24,
                    calories: 23590.628179017596,
                    totalWeight: 13641.68500464,
                    totalTime: 392,
                }
            },
        ],
        fetchRecipesStart: false,
        fetchRecipesFailed: false,
    },
    redUI: {
        modal: false,
        searchType: 0,
        showNutrientDetails: false,
        showDailyDetails: false,
        recipeIndex: 0
    }
}

const setup = (initialState = {}) => {
    const setupState = {
        ...defaultState,
        redUI: {
            ...defaultState.redUI,
            ...initialState
        } 
    }
    const store = storeFactory(setupState);
    return shallow(<Recipe store={store} />).dive();
}

describe("nutrient section should", () => {
    test("render, when container's showNutrient state is true", () => {
        const props = { 
            showNutrientDetails: true,
        };
        const wrapper = setup(props);
        const section = findByTestAttr(wrapper, 'nutrient-section');
        expect(section.length).toBe(1);
    });
    test("not render, when container's showNutrient state is false", () => {
        const props = { 
            showNutrientDetails: false,
        };
        const wrapper = setup(props);
        const section = findByTestAttr(wrapper, 'nutrient-section');
        expect(section.length).toBe(0);
    });
});

describe("daily section should", () => {
    test("render, when container's showDaily state is true", () => {
        const props = { 
            showDailyDetails: true,
        };
        const wrapper = setup(props);
        const section = findByTestAttr(wrapper, 'daily-section');
        expect(section.length).toBe(1);
    });
    test("render, when container's showDaily state is true", () => {
        const props = { 
            showDailyDetails: false,
        };
        const wrapper = setup(props);
        const section = findByTestAttr(wrapper, 'daily-section');
        expect(section.length).toBe(0);
    });
});

describe('redux', () => {

    test("has 'showNutrientDetails' prop piece of state from reducers", () => {
        const showNutrientDetails = true;
        const wrapper = setup(
            { showNutrientDetails }
        );
        const showNutrientDetailsProp = wrapper.instance().props.showNutrientDetails;
        expect(showNutrientDetailsProp).toBe(showNutrientDetails);
        expect(showNutrientDetailsProp).toBeBoolean();
    });

    test("has 'showDailyDetails' prop piece of state from reducers", () => {
        const showDailyDetails = false; 
        const wrapper = setup(
            { showDailyDetails }
        );
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

    test("'toggleModal' is called, should return opposite boolean value", () => {
        const store = storeFactory(defaultState);
        const wrapper = shallow(<Recipe store={store} />).dive();
        store.dispatch(toggleModal());
        const newState = store.getState();
        const newRedUI = newState.redUI;

        const expectedRedUI = {
            ...defaultState.redUI,
            modal: true,
        }
        
        expect(newRedUI).toEqual(expectedRedUI);
    });

    test("'toggleNutrientDetails' is called, should return opposite boolean value", () => {
        const store = storeFactory(defaultState);
        const wrapper = shallow(<Recipe store={store} />).dive();
        store.dispatch(toggleNutrientDetails());
        const newState = store.getState();
        const newRedUI = newState.redUI;

        const expectedRedUI = {
            ...defaultState.redUI,
            showNutrientDetails: true,
        }

        expect(newRedUI).toEqual(expectedRedUI);
    });

    test("'toggleDailyDetails' is called, should return opposite boolean value", () => {
        const store = storeFactory(defaultState);
        const wrapper = shallow(<Recipe store={store} />).dive();
        store.dispatch(toggleDailyDetails());
        const newState = store.getState();
        const newRedUI = newState.redUI;

        const expectedRedUI = {
            ...defaultState.redUI,
            showDailyDetails: true,
        }

        expect(newRedUI).toEqual(expectedRedUI);
    });

    
})
