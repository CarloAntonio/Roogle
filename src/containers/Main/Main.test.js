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
            wrapper = setup();
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
                    modal: false,
                    searchType: 1,
                    showNutrientDetails: false,
                    showDailyDetails: false,
                    recipeIndex: 0
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
                    modal: false,
                    searchType: 2,
                    showNutrientDetails: false,
                    showDailyDetails: false,
                    recipeIndex: 0
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

describe('when loading state', () => {

    test('is false, it does not render loader UI', () => {
        const props = {
            redAPI: {
                recipeItems: [],
                fetchRecipesStart: false,
                fetchRecipesFail: false
            }
        };
        const wrapper = setup(props);
        const componet = findByTestAttr(wrapper, 'loader');
        expect(componet.length).toBe(0);
    });
    test('is true, it renders loader UI', () => {
        const props = {
            redAPI: {
                recipeItems: [],
                fetchRecipesStart: true,
                fetchRecipesFail: false
            }
        };
        const wrapper = setup(props);
        const componet = findByTestAttr(wrapper, 'loader');
        expect(componet.length).toBe(1);
    });

});

describe('when failed state', () => {

    test('is false, it does not render error UI', () => {
        const props = {
            redAPI: {
                recipeItems: [],
                fetchRecipesStart: false,
                fetchRecipesFail: false
            }
        };
        const wrapper = setup(props);
        const componet = findByTestAttr(wrapper, 'error');
        expect(componet.length).toBe(0);
    });
    test('is true, it renders error UI', () => {
        const props = {
            redAPI: {
                recipeItems: [],
                fetchRecipesStart: false,
                fetchRecipesFail: true
            }
        };
        const wrapper = setup(props);
        const componet = findByTestAttr(wrapper, 'error');
        expect(componet.length).toBe(1);
    });

});

describe('component has redux state from', () => {

    test("redUI reducer called 'search'", () => {
        const redUI = {
            modal: false,
            searchType: 0,
            showNutrientDetails: false,
            showDailyDetails: false,
            recipeIndex: 0
        }; 
        const wrapper = setup({ redUI });
        const searchProp = wrapper.instance().props.searchType;
        expect(searchProp).toBe(redUI.searchType);
        expect(searchProp).toBeNumber();
    });

    describe('redAPI reducer called', () => {

        let redAPI;
        let wrapper;
        beforeEach(() => {
            redAPI = {
                recipeItems: [],
                fetchRecipesStart: false,
                fetchRecipesFail: false
            }; 
            wrapper = setup({ redAPI });
        });
        test("'loading'", () => {
            const loadingProp = wrapper.instance().props.loading;
            expect(loadingProp).toBe(redAPI.fetchRecipesStart);
            expect(loadingProp).toBeBoolean();
        });
        test("'failed'", () => {
            const failedProp = wrapper.instance().props.failed;
            expect(failedProp).toBe(redAPI.fetchRecipesFail);
            expect(failedProp).toBeBoolean();
        });
        test("'recipeItems'", () => {
            const recipeItemsProp = wrapper.instance().props.recipeItems;
            expect(recipeItemsProp).toBe(redAPI.recipeItems);
            expect(recipeItemsProp).toBeArray();
        });
    });    

    describe('redOptions reducer called', () => {

        let redOptions;
        let wrapper;
        beforeEach(() => {
            redOptions = {
                searchText: "Chicken Adobo",
                healthItems: {},
                dietItems: {},
                dropdownItems: {},
                nutrientItems: {}
            }; 
            wrapper = setup({ redOptions });
        })
        test("'searchText'", () => {
            const searchTextProp = wrapper.instance().props.searchText;
            expect(searchTextProp).toBe(redOptions.searchText);
            expect(searchTextProp).toBeString();
        });
    
        test("'healthItems'", () => {
            const healthItemsProp = wrapper.instance().props.healthItems;
            expect(healthItemsProp).toBe(redOptions.healthItems);
            expect(healthItemsProp).toBeObject();
        });

        test("'healthItems'", () => {
            const healthItemsProp = wrapper.instance().props.healthItems;
            expect(healthItemsProp).toBe(redOptions.healthItems);
            expect(healthItemsProp).toBeObject();
        });

        test("'dietItems'", () => {
            const dietItemsProp = wrapper.instance().props.dietItems;
            expect(dietItemsProp).toBe(redOptions.dietItems);
            expect(dietItemsProp).toBeObject();
        });
        test("'dropdownItems'", () => {
            const dropdownItemsProp = wrapper.instance().props.dropdownItems;
            expect(dropdownItemsProp).toBe(redOptions.dropdownItems);
            expect(dropdownItemsProp).toBeObject();
        });
        test("'nutrientItems'", () => {
            const nutrientItemsProp = wrapper.instance().props.nutrientItems;
            expect(nutrientItemsProp).toBe(redOptions.nutrientItems);
            expect(nutrientItemsProp).toBeObject();
        });
    });
});

describe('redux actions', () => {
    test("has 'toggleSearch' action prop", () => {
        const wrapper = setup();
        const toggleSearchProp = wrapper.instance().props.toggleSearch;
        expect(toggleSearchProp).toBeInstanceOf(Function);
    });
    test("has 'showDetails' action prop", () => {
        const wrapper = setup();
        const toggleModalProp = wrapper.instance().props.showDetails;
        expect(toggleModalProp).toBeInstanceOf(Function);
    });
    test("has 'mainSearchTextChange' action prop", () => {
        const wrapper = setup();
        const mainSearchTextChangeProp = wrapper.instance().props.mainSearchTextChange;
        expect(mainSearchTextChangeProp).toBeInstanceOf(Function);
    });
    test("has 'fetchRecipes' action prop", () => {
        const wrapper = setup();
        const fetchRecipesProp = wrapper.instance().props.fetchRecipes;
        expect(fetchRecipesProp).toBeInstanceOf(Function);
    });
    test("has 'healthItemChange' action prop", () => {
        const wrapper = setup();
        const healthItemChangeProp = wrapper.instance().props.healthItemChange;
        expect(healthItemChangeProp).toBeInstanceOf(Function);
    });
    test("has 'dietItemChange' action prop", () => {
        const wrapper = setup();
        const dietItemChangeProp = wrapper.instance().props.dietItemChange;
        expect(dietItemChangeProp).toBeInstanceOf(Function);
    });
    test("has 'dropdownItemChange' action prop", () => {
        const wrapper = setup();
        const dropdownItemChangeProp = wrapper.instance().props.dropdownItemChange;
        expect(dropdownItemChangeProp).toBeInstanceOf(Function);
    });
    test("has 'nutrientItemChange' action prop", () => {
        const wrapper = setup();
        const nutrientItemChangeProp = wrapper.instance().props.nutrientItemChange;
        expect(nutrientItemChangeProp).toBeInstanceOf(Function);
    });
    test("has 'clearSelections' action prop", () => {
        const wrapper = setup();
        const clearSelectionsProp = wrapper.instance().props.clearSelections;
        expect(clearSelectionsProp).toBeInstanceOf(Function);
    });
    test("has 'originalNutrientState' action prop", () => {
        const wrapper = setup();
        const originalNutrientStateProp = wrapper.instance().props.originalNutrientState;
        expect(originalNutrientStateProp).toBeInstanceOf(Function);
    });
});

//possibly move this to action creater test file
describe("when action creator", () => {

    let store;
    let wrapper;
    let initialState;
    beforeEach(() => {
        store = storeFactory();
        wrapper = shallow(<Main store={store} />).dive();
        initialState = store.getState();
    });

    test("'toggleSearch' is called, it updates states correctly", () => {
        //copy initial state
        const startState = { ...initialState }

        //run fxn
        store.dispatch(toggleSearch());

        //get new state
        const newState = store.getState();

        //expected state
        const expectedState = {
            ...startState,
            redUI: {
                ...startState.redUI,
                searchType: 1
            }
        }

        //compare expected with new state
        expect(newState).toEqual(expectedState);
    });
})