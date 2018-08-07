
import * as actionTypes from '../actions/actTypes';

const initialState = {
    recipeItems: [],
    fetchRecipesStart: false,
    fetchRecipesFail: false
}

const fetchRecipesStart  = (state, action) => {
    return {
        ...state,
        fetchRecipesStart: true,
        fetchRecipesFail: false
    }
}

const fetchRecipesSuccess = (state, action) => {
    return {
        ...state,
        fetchRecipesStart: false,
        recipeItems: action.recipeItems,
    }
}

const fetchRecipesFail = (state, action) => {
    return {
        ...state,
        fetchRecipesStart: false,
        fetchRecipesFail: true
    }
}


const redAPI = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_RECIPES_START: return fetchRecipesStart(state, action);
        case actionTypes.FETCH_RECIPES_SUCCESS: return fetchRecipesSuccess(state, action);
        case actionTypes.FETCH_RECIPES_FAIL: return fetchRecipesFail(state, action);
        default: return state;
    }
} 

export default redAPI;
