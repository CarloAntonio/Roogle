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
}

const setup = (initialState = {}) => {
    const setupState = {
        ...defaultState,
        ...initialState
    }
    const store = storeFactory(setupState);
    return shallow(<Recipe store={store} />).dive();
}

describe("nutrient section should", () => {
    test("render, when container's showNutrient state is true", () => {
        const props = { 
            redUI: {
                modal: false,
                searchType: 1,
                showNutrientDetails: true,
                showDailyDetails: false,
                recipeIndex: 0
            }
        };
        const wrapper = setup(props);
        const section = findByTestAttr(wrapper, 'nutrient-section');
        expect(section.length).toBe(1);
    });
    test("not render, when container's showNutrient state is false", () => {
        const props = { 
            redUI: {
                modal: false,
                searchType: 1,
                showNutrientDetails: false,
                showDailyDetails: false,
                recipeIndex: 0
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
                modal: false,
                searchType: 1,
                showNutrientDetails: false,
                showDailyDetails: true,
                recipeIndex: 0
            }
        };
        const wrapper = setup(props);
        const section = findByTestAttr(wrapper, 'daily-section');
        expect(section.length).toBe(1);
    });
    test("render, when container's showDaily state is true", () => {
        const props = { 
            redUI: {
                modal: false,
                searchType: 1,
                showNutrientDetails: false,
                showDailyDetails: false,
                recipeIndex: 0
            }
        };
        const wrapper = setup(props);
        const section = findByTestAttr(wrapper, 'daily-section');
        expect(section.length).toBe(0);
    });
});

describe('component has redux state from', () => {

    test("redUI reducer called 'showNutrientDetails'", () => {
        const redUI = {
            modal: false,
            searchType: 0,
            showNutrientDetails: true,
            showDailyDetails: false,
            recipeIndex: 0
        }; 
        const wrapper = setup({ redUI });
        const showNutrientDetailsProp = wrapper.instance().props.showNutrientDetails;
        expect(showNutrientDetailsProp).toBe(redUI.showNutrientDetails);
        expect(showNutrientDetailsProp).toBeBoolean();
    });

    test("redUI reducer called 'showDailyDetails'", () => {
        const redUI = {
            modal: false,
            searchType: 0,
            showNutrientDetails: true,
            showDailyDetails: false,
            recipeIndex: 0
        }; 
        const wrapper = setup({ redUI });
        const showDailyDetailsProp = wrapper.instance().props.showDailyDetails;
        expect(showDailyDetailsProp).toBe(redUI.showDailyDetails);
        expect(showDailyDetailsProp).toBeBoolean();
    });

    test("redUI reducer called 'recipeIndex'", () => {
        const redUI = {
            modal: false,
            searchType: 0,
            showNutrientDetails: true,
            showDailyDetails: false,
            recipeIndex: 0
        }; 
        const wrapper = setup({ redUI });
        const recipeIndexProp = wrapper.instance().props.recipeIndex;
        expect(recipeIndexProp).toBe(redUI.recipeIndex);
        expect(recipeIndexProp).toBeNumber();
    });

    test("redAPI reducer called 'recipeItems'", () => {
        const wrapper = setup();
        const recipeItemsProp = wrapper.instance().props.recipeItems;
        expect(recipeItemsProp).toEqual(defaultState.redAPI.recipeItems);
        expect(recipeItemsProp).toBeArray();
    });
});

describe('redux actions', () => {

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