import * as actionTypes from './actTypes';

export const toggleModal = () => {
    return {
        type: actionTypes.TOGGLE_MODAL
    };
};

export const toggleSearch = () => {
    return {
        type: actionTypes.TOGGLE_SEARCH
    }
}

export const toggleNutrientDetails = () => {
    return {
        type: actionTypes.TOGGLE_NUTRIENT_DETAILS
    }
} 

export const toggleDailyDetails = () => {
    return {
        type: actionTypes.TOGGLE_DAILY_DETAILS
    }
} 