
import * as actionTypes from '../actions/actTypes';

const initialState = {
    searchText: "test",
    fetchRecipesStart: false,
    fetchRecipesFailed: false,
}

const mainSearchTextChange = (state, action) => {
    return {
        ...state,
        searchText: action.text
    }
}


const redAPI = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.MAIN_SEARCH_TEXT_CHANGE: return mainSearchTextChange(state, action);
        default: return state;
    }
} 

export default redAPI;