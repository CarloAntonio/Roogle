
import * as actionTypes from '../actions/actTypes';

const initialState = {
    modal: false,
    searchType: 0,
    showNutrientDetails: false,
    showDailyDetails: false,
    recipeIndex: 0
}

const toggleModal = (state, action) => {
    return {
        ...state,
        modal: !state.modal
    }
}

const toggleSearch = (state, action) => {

    let newSearchState = 0;

    if (state.searchType === 0) newSearchState = 1;
    else if (state.searchType === 1) newSearchState = 2;
    else if (state.searchType === 2) newSearchState = 0;
    else newSearchState = 0;

    return {
        ...state,
        searchType: newSearchState
    }
}

const toggleNutrientDetails = (state, action) => {
    return {
        ...state,
        showNutrientDetails: !state.showNutrientDetails
    }
}

const toggleDailyDetails = (state, action) => {
    return {
        ...state,
        showDailyDetails: !state.showDailyDetails
    }
}

const updateRecipeIndex = (state, action) => {
    return {
        ...state,
        recipeIndex: action.index
    }
}

const redUI = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.TOGGLE_MODAL: return toggleModal(state, action);
        case actionTypes.TOGGLE_SEARCH: return toggleSearch(state, action);
        case actionTypes.TOGGLE_NUTRIENT_DETAILS: return toggleNutrientDetails(state, action);
        case actionTypes.TOGGLE_DAILY_DETAILS: return toggleDailyDetails(state, action);
        case actionTypes.UPDATE_RECIPE_INDEX: return updateRecipeIndex(state, action);
        default: return state;
    }

}

export default redUI;