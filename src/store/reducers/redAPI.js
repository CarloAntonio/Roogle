
import * as actionTypes from '../actions/actTypes';

const initialState = {
    recipeItems: [],
    fetchRecipesStart: false,
    fetchRecipesFailed: false,
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
        case actionTypes.FETCH_RECIPES_SUCCESS: return fetchRecipesSuccess(state, action);
        default: return state;
    }
} 

export default redAPI;
