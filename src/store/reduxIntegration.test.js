import * as actions from './actions/actions';
import moxios from 'moxios';

import { storeFactory } from '../utils/testUtils';

describe("when redUI action creator", () => {

    let store;
    let initialState;
    beforeEach(() => {
        store = storeFactory();
        initialState = store.getState();
    });

    test("'toggleSearch' is called, it updates states correctly", () => {
        //copy initial state
        const startState = { ...initialState }

        //run fxn
        store.dispatch(actions.toggleSearch());

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

    test("'toggleModal' is called, it updates states correctly", () => {

        const startState = { ...initialState }

        store.dispatch(actions.toggleModal());
        const newState = store.getState();
        
        const expectedState = {
            ...startState,
            redUI: {
                ...startState.redUI,
                modal: true,
            }
        }

        expect(newState).toEqual(expectedState);
    });

    test("'toggleNutrientDetails' is called, it updates states correctly", () => {

        const startState = { ...initialState }

        store.dispatch(actions.toggleNutrientDetails());
        const newState = store.getState();
        
        const expectedState = {
            ...startState,
            redUI: {
                ...startState.redUI,
                showNutrientDetails: true,
            }
        }

        expect(newState).toEqual(expectedState);
    });

    test("'toggleDailyDetails' is called, it updates states correctly", () => {

        const startState = { ...initialState }

        store.dispatch(actions.toggleDailyDetails());
        const newState = store.getState();
        
        const expectedState = {
            ...startState,
            redUI: {
                ...startState.redUI,
                showDailyDetails: true,
            }
        }

        expect(newState).toEqual(expectedState);
    });

    test("'updateRecipeIndex' is called, it updates states correctly", () => {

        const startState = { ...initialState }
        const expectedIndex = 1;

        store.dispatch(actions.updateRecipeIndex(expectedIndex));
        const newState = store.getState();
        
        const expectedState = {
            ...startState,
            redUI: {
                ...startState.redUI,
                recipeIndex: expectedIndex
            }
        }

        expect(newState).toEqual(expectedState);
    });

})

describe("when redAPI action creator", () => {

    let store;
    let initialState;
    beforeEach(() => {
        store = storeFactory();
        initialState = store.getState();
    });

    test("'fetchRecipesStart' is called, it updates states correctly", () => {

        const startState = { ...initialState }

        store.dispatch(actions.fetchRecipesStart());
        const newState = store.getState();
        
        const expectedState = {
            ...startState,
            redAPI: {
                ...startState.redAPI,
                fetchRecipesStart: true,
            }
        }

        expect(newState).toEqual(expectedState);
    });

    test("'fetchRecipesSuccess' is called, it updates states correctly", () => {

        const startState = { ...initialState }

        store.dispatch(actions.fetchRecipesSuccess());
        const newState = store.getState();
        
        const expectedState = {
            ...startState,
            redAPI: {
                ...startState.redAPI,
                fetchRecipesStart: false,
                //fetches data, should be undefined, not currently mocking
                recipeItems: undefined
            }
        }

        expect(newState).toEqual(expectedState);
    });

    test("'fetchRecipesFail' is called, it updates states correctly", () => {

        const startState = { ...initialState }

        store.dispatch(actions.fetchRecipesFail());
        const newState = store.getState();
        
        const expectedState = {
            ...startState,
            redAPI: {
                ...startState.redAPI,
                fetchRecipesStart: false,
                fetchRecipesFail: true
            }
        }

        expect(newState).toEqual(expectedState);
    });

});

// describe("API call via 'fetchRecipes' action creator", () => {
//     beforeEach(() => {
//         moxios.install();
//     });

//     afterEach(() => {
//         moxios.uninstall();
//     });

//     test('adds response to recipeItems state', () => {
//         const store = storeFactory();

//         const searchText = store.getState().redOptions.searchText;
//         const healthItems = store.getState().redOptions.healthItems;
//         const dietItems = store.getState().redOptions.dietItems;
//         const dropdownItems = store.getState().redOptions.dropdownItems;
//         const nutrientItems = store.getState().redOptions.nutrientItems;

//         moxios.wait(() => {
//             const request = moxios.requests.mostRecent();
//             request.respondWith({
//                 hits: []
//             });
//         });

//         return store.dispatch(actions.fetchRecipes(searchText, healthItems, dietItems, dropdownItems, nutrientItems))
//             .then(() => {
//                 const newState = store.getState();
//                 expect(newState.hits).toBeArray;
//             });
//     });
//})

// recipeItems: [
//     { 
//         recipe: {
//             uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_229fb120b75c5d4e29a8b98ba43883a8",
//             label: "Chicken Adobo",
//             image: "https://www.edamam.com/web-img/3f3/3f3db9cd446edf1680eab304b32f576d.jpg",
//             source: "Food52",
//             url: "https://food52.com/recipes/17507-chicken-adobo-with-okra-and-sunchokes",
//             shareAs: "http://www.edamam.com/recipe/chicken-adobo-229fb120b75c5d4e29a8b98ba43883a8/chicken+adobo",
//             yield: 24,
//             calories: 23590.628179017596,
//             totalWeight: 13641.68500464,
//             totalTime: 392,
//         }
//     },
// ]


// recipeItems: [],

// fetchRecipes,


// describe("Action creator", () => {

//     test("'toggleModal' is called, should return opposite boolean value", () => {
//         const store = storeFactory(defaultState);
//         const wrapper = shallow(<Recipe store={store} />).dive();
//         store.dispatch(toggleModal());
//         const newState = store.getState();
//         const newRedUI = newState.redUI;

//         const expectedRedUI = {
//             ...defaultState.redUI,
//             modal: true,
//         }
        
//         expect(newRedUI).toEqual(expectedRedUI);
//     });

//     test("'toggleNutrientDetails' is called, should return opposite boolean value", () => {
//         const store = storeFactory(defaultState);
//         const wrapper = shallow(<Recipe store={store} />).dive();
//         store.dispatch(toggleNutrientDetails());
//         const newState = store.getState();
//         const newRedUI = newState.redUI;

//         const expectedRedUI = {
//             ...defaultState.redUI,
//             showNutrientDetails: true,
//         }

//         expect(newRedUI).toEqual(expectedRedUI);
//     });

//     test("'toggleDailyDetails' is called, should return opposite boolean value", () => {
//         const store = storeFactory(defaultState);
//         const wrapper = shallow(<Recipe store={store} />).dive();
//         store.dispatch(toggleDailyDetails());
//         const newState = store.getState();
//         const newRedUI = newState.redUI;

//         const expectedRedUI = {
//             ...defaultState.redUI,
//             showDailyDetails: true,
//         }

//         expect(newRedUI).toEqual(expectedRedUI);
//     });

    
// })