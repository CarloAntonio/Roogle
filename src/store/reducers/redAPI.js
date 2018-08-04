
import * as actionTypes from '../actions/actTypes';

const initialState = {
    searchText: "test",
    recipeItems: [],
    fetchRecipesStart: false,
    fetchRecipesFailed: false,
}

const mainSearchTextChange = (state, action) => {
    return {
        ...state,
        searchText: action.text
    }
}

const fetchRecipesSuccess = (state, action) => {
    return {
        ...state,
        fetchRecipesStart: false,
        recipeItems: action.recipeItems,
    }
}


const redAPI = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.MAIN_SEARCH_TEXT_CHANGE: return mainSearchTextChange(state, action);
        case actionTypes.FETCH_RECIPES_SUCCESS: return fetchRecipesSuccess(state, action);
        default: return state;
    }
} 

export default redAPI;